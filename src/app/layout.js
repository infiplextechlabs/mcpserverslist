import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Analytics } from '@/utils/analytics'
import { GA_TRACKING_ID } from '@/utils/gtag'
import { Cardo } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'
import './globals.css'

const cardo = Cardo({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'MCP Servers List',
  description: 'Browse and discover Awesome MCP Servers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={cardo.className}>
        <div className="layout">
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <Suspense>
            <Analytics />
          </Suspense>
        </div>
      </body>
    </html>
  )
}
