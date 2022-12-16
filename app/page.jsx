import Image from 'next/image'
import Header from '../components/header'
import Hero from '../components/hero'
import Info from '../components/info'

export default function Home() {
  return (
    <div className="h-screen max-w-screen flex flex-col md:grid md:grid-cols-2">
      <Header />
      <Hero />
      <Info />
    </div>
  )
}
