import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import './globals.css'
import Footer from '../../nextjs-classtask01/app/pages/LandingPage/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Irfan -- Xplore Skill',
  description: 'by Irfan Maqbool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
