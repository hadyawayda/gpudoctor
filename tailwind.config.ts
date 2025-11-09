import type { Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'
import scrollbar from 'tailwind-scrollbar'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [aspectRatio, scrollbar({ nocompatible: true })],
}

export default config
