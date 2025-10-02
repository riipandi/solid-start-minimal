import { A } from '@solidjs/router'
import Counter from '~/components/Counter'

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 px-4">
      <div class="w-full max-w-4xl text-center">
        <h1 class="mb-6 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-700 bg-clip-text font-extrabold text-7xl text-transparent uppercase tracking-tight drop-shadow-lg">
          Solid Minimal
        </h1>
        <p class="mb-8 font-light text-gray-600 text-xl">
          A minimal <span class="font-semibold text-sky-600">SolidStart</span> template powered by{' '}
          <span class="font-semibold text-sky-600">Tailwind CSS</span> for fast and beautiful UI
          development.
        </p>
        <Counter />
        <div class="mt-10 flex flex-col items-center gap-4">
          <A
            href="https://solidjs.com"
            class="inline-block rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-sky-700"
            target="_blank"
            rel="noopener"
          >
            Learn SolidJS
          </A>
          <A
            href="/about"
            class="inline-block rounded-lg border border-sky-600 px-6 py-3 font-semibold text-sky-600 transition hover:bg-sky-50"
          >
            About Page
          </A>
        </div>
      </div>
      <footer class="absolute bottom-4 w-full text-center text-gray-500 text-sm">
        Crafted in 🇮🇩 by{' '}
        <A
          href="https://github.com/riipandi"
          class="underline transition hover:text-sky-600"
          target="_blank"
          rel="noopener"
        >
          Aris Ripandi
        </A>
        .
      </footer>
    </main>
  )
}
