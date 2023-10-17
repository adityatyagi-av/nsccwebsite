import Header from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/home/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NSCC KIET',
  description: 'NSCC KIET CLUB WEBSITE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
