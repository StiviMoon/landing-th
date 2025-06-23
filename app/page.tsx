import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Benefits from "../components/Benefits"
import Timeline from "../components/Timeline"
import Team from "../components/Team"
import ClientsSlider from "../components/ClientsSlider"
import TestimonialsSlider from "../components/TestimonialsSlider"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Gallery from "@/components/Gallery"
import WhatsAppButton from "@/components/WhatsAppButton"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Timeline />
        <Team />
        <Gallery />
        <ClientsSlider />
        <TestimonialsSlider />
        <ContactForm />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
