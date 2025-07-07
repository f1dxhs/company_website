import "./globals.css";

export const metadata = {
  title: 'DLM Heavy Industry - Professional Bulk Material Handling Equipment',
  description: 'Sichuan DLM Heavy Industry Tech Co., LTD specializes in design, R&D, and manufacturing of belt conveyors, bucket elevators, and comprehensive material handling solutions. 30+ years experience, 800+ global partners.',
  keywords: 'DLM Heavy Industry, belt conveyor, bucket elevator, pipe conveyor, large angle conveyor, material handling equipment, bulk material transportation, Sichuan, China',
  authors: [{ name: 'DLM Heavy Industry' }],
  creator: 'DLM Heavy Industry',
  publisher: 'DLM Heavy Industry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'DLM Heavy Industry - Material Handling Excellence',
    description: 'Professional manufacturer of bulk material handling equipment with 30+ years experience',
    url: 'https://www.dlm-industry.com',
    siteName: 'DLM Heavy Industry',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DLM Heavy Industry',
    description: 'Professional bulk material handling equipment manufacturer',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  )
}