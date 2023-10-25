import Header from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/home/footer'
import Favicon from '/public/favicon.ico';
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'NSCC KIET',
  description: 'Innovative Technical Club Of KIET mainly focusing on project based learning and Data Structures and Algorithm. Various Domains including Web Development, Android Development, Machine Learning , Artificial Intelligence, User Interface/User Experience,Content Writing, Graphic Designing, Cloud Computing,Devops. ',
  icons: [{ rel: 'icon', url: Favicon.src }],
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
