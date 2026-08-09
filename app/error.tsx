'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="px-6 py-2 bg-primary rounded-full hover:bg-primary-hover transition-colors"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
