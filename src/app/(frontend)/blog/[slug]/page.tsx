import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    limit: 1000,
  })

  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.meta?.title || post.title,
    description: post.meta?.description || post.excerpt || undefined,
  }
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]
  if (!post) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.publishedAt || undefined,
    author: {
      '@type': 'Person',
      name: 'Brian Mangano',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Balestra Group',
      url: 'https://balestra.group',
    },
  }

  return (
    <>
      <article className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <header className="mb-12">
          {post.publishedAt && (
            <time
              dateTime={post.publishedAt}
              className="text-sm text-gray-500 uppercase tracking-widest mb-4 block"
            >
              {new Date(post.publishedAt).toLocaleDateString('en-NZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-gray-400 leading-relaxed">{post.excerpt}</p>
          )}
          <div className="w-24 h-1 bg-balestra-red mt-8" />
        </header>

        {post.content && (
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-a:text-balestra-red prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-balestra-red">
            <RichText data={post.content} />
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-white/10">
          <a
            href="/blog"
            className="text-balestra-red hover:text-white transition-colors underline underline-offset-4 decoration-white/10"
          >
            &larr; All Insights
          </a>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
