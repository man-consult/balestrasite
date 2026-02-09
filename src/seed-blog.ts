/**
 * Blog content import script.
 * Reads .md files from migrate-content/, strips image links,
 * converts markdown to Lexical JSON, and creates posts via Payload API.
 *
 * Usage: npx tsx src/seed-blog.ts
 */
import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from './payload.config.js'
import { convertMarkdownToLexical } from '@payloadcms/richtext-lexical'
import { editorConfigFactory } from '@payloadcms/richtext-lexical'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CONTENT_DIR = path.resolve(__dirname, '..', 'migrate-content')

interface Frontmatter {
  title: string
  publishedDate: string
  excerpt: string
  image?: string
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error('Invalid frontmatter')

  const frontmatterBlock = match[1]
  const body = match[2]

  const frontmatter: Record<string, string> = {}
  for (const line of frontmatterBlock.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim()
    frontmatter[key] = value
  }

  return {
    frontmatter: frontmatter as unknown as Frontmatter,
    body,
  }
}

function stripImageLinks(markdown: string): string {
  // Strip markdown images: ![alt](url)
  let result = markdown.replace(/!\[.*?\]\(.*?\)/g, '')
  // Strip HTML img tags
  result = result.replace(/<img[^>]*>/gi, '')
  // Clean up any double blank lines left behind
  result = result.replace(/\n{3,}/g, '\n\n')
  return result.trim()
}

function slugify(filename: string): string {
  return filename.replace(/\.md$/, '')
}

async function main() {
  console.log('Starting blog import...')

  const payload = await getPayload({ config })
  const sanitizedConfig = await payload.config

  const editorConfig = await editorConfigFactory.default({ config: sanitizedConfig })

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
  console.log(`Found ${files.length} markdown files`)

  for (const file of files) {
    const slug = slugify(file)
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const { frontmatter, body } = parseFrontmatter(raw)
    const cleanBody = stripImageLinks(body)

    // Check if post already exists
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  Skipping "${frontmatter.title}" (already exists)`)
      continue
    }

    const lexicalContent = convertMarkdownToLexical({
      editorConfig,
      markdown: cleanBody,
    })

    await payload.create({
      collection: 'posts',
      data: {
        title: frontmatter.title,
        slug,
        excerpt: frontmatter.excerpt,
        content: lexicalContent,
        status: 'published',
        publishedAt: frontmatter.publishedDate,
      },
    })

    console.log(`  Created: "${frontmatter.title}"`)
  }

  console.log('Blog import complete!')
  process.exit(0)
}

main().catch((err) => {
  console.error('Import failed:', err)
  process.exit(1)
})
