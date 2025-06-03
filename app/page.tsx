import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Benefits from "@/components/benefits"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Gallery />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </main>
  )
}
