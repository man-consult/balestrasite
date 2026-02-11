import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Media } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Insights on procurement transformation, AI-powered analytics, and business strategy.',
}

export default async function BlogListingPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    depth: 1,
    limit: 50,
  })

  return (
    <>
      <section className="pt-32 pb-12 max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Insights &amp; <span className="text-balestra-red italic">Analysis</span>
        </h1>
        <div className="w-24 h-1 bg-balestra-red mb-8" />
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          Perspectives on procurement transformation, AI-powered analytics, and business strategy.
        </p>
      </section>

      <section className="pb-24 max-w-4xl mx-auto px-6">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">No posts published yet.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => {
              const image = typeof post.featuredImage === 'object' ? post.featuredImage as Media : null

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block group bg-balestra-black rounded-sm border border-white/10 hover:border-balestra-red/50 transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {image?.url && (
                      <div className="relative w-full md:w-1/3 aspect-[16/10] md:aspect-auto md:min-h-[200px] shrink-0">
                        <Image
                          src={image.url}
                          alt={image.alt || post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="flex-1 p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <h2 className="font-serif text-2xl text-white group-hover:text-balestra-red transition-colors">
                          {post.title}
                        </h2>
                        {post.publishedAt && (
                          <time
                            dateTime={post.publishedAt}
                            className="text-sm text-gray-500 whitespace-nowrap mt-1"
                          >
                            {new Date(post.publishedAt).toLocaleDateString('en-NZ', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        )}
                      </div>
                      {post.excerpt && (
                        <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
