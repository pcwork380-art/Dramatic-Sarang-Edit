import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white">
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="mb-8">Could not find requested resource</p>
      <Link href="/" className="px-6 py-2 bg-primary rounded-full hover:bg-primary-hover transition-colors">
        Return Home
      </Link>
    </div>
  )
}
