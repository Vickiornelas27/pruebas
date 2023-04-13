import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from './components/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Slider />
    </>
  )
}
