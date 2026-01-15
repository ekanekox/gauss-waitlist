import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { PostHogProvider } from '@/components/providers/posthog-provider'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gauss | Diagnóstico Inteligente para Mecânicos',
  description:
    'Descreva o problema, receba diagnósticos precisos em segundos. IA treinada em milhões de casos automotivos.',
  keywords: [
    'diagnóstico automotivo',
    'mecânico',
    'inteligência artificial',
    'oficina mecânica',
    'diagnóstico de carro',
    'gauss',
  ],
  authors: [{ name: 'Gauss' }],
  creator: 'Gauss',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gauss.to',
    title: 'Gauss | Diagnóstico Inteligente para Mecânicos',
    description:
      'Descreva o problema, receba diagnósticos precisos em segundos. IA treinada em milhões de casos automotivos.',
    siteName: 'Gauss',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gauss - Diagnóstico Inteligente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gauss | Diagnóstico Inteligente para Mecânicos',
    description:
      'Descreva o problema, receba diagnósticos precisos em segundos.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16a34a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body className="font-sans">
        <PostHogProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
              },
            }}
          />
        </PostHogProvider>
      </body>
    </html>
  )
}
