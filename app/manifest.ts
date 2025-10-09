import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Euxhenjo Nex - Specialista Integrazione AI',
    short_name: 'Euxhenjo Nex',
    description: 'Specialista Integrazione AI che aiuta aziende a sfruttare AI e automazioni per risparmiare tempo, ridurre costi e sbloccare nuove possibilità.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
