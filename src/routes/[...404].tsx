import { A } from '@solidjs/router'

export default function NotFound() {
  return (
    <main class="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 px-4">
      <div class="text-center">
        <h1 class="mb-6 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-700 bg-clip-text font-extrabold text-7xl text-transparent uppercase drop-shadow-lg">
          404
        </h1>
        <p class="mb-8 font-light text-gray-600 text-lg">Page not found.</p>
        <nav class="mt-8 flex justify-center gap-4">
          <A
            href="/"
            class="inline-block rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-sky-700"
          >
            Home
          </A>
          <A
            href="/about"
            class="inline-block rounded-lg border border-sky-600 px-6 py-3 font-semibold text-sky-600 transition hover:bg-sky-50"
          >
            About
          </A>
        </nav>
      </div>
    </main>
  )
}
