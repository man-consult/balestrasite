export default function NotFound() {
  return (
    <section className="py-32 max-w-4xl mx-auto px-6 text-center">
      <h1 className="font-serif text-6xl text-balestra-red mb-6">404</h1>
      <p className="text-xl text-gray-300 mb-8">This page has gone off-target.</p>
      <a
        href="/"
        className="text-balestra-red hover:text-white underline underline-offset-4 transition-colors"
      >
        Return to Home
      </a>
    </section>
  )
}
