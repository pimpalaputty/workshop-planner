import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Workshop Planner',
    short_name: 'Workshop',
    description: 'Plan and organize service design workshops with an intuitive visual agenda builder.',
    start_url: '/dashboard',
    display: 'standalone',
    background_color: '#0b0d0e',
    theme_color: '#8b5cf6',
    orientation: 'any',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
