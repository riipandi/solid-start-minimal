import { A } from '@solidjs/router'
import Counter from '~/components/Counter'

export default function About() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">About Page</h1>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <A
          href="https://solidjs.com"
          class="text-sky-600 hover:underline"
          target="_blank"
          rel="noopener"
        >
          solidjs.com
        </A>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {' - '}
        <span>About Page</span>
      </p>
    </main>
  )
}
