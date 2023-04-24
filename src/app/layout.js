import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

import { Roboto_Slab, Lora } from 'next/font/google'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={lora.className}>
      <body>
        <Navbar></Navbar>
        {children}

        <Footer />
      </body>
    </html>
  )
}
