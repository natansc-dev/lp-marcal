import Hero from '@/components/Hero'
import EventInfo from '@/components/EventInfo'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <EventInfo />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
