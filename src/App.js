import { MyNavbar } from './components/navbar.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { ServicesSection } from './components/ServiceSection.jsx'
import { WhyChooseUs } from './components/WhyChooseUs.jsx'
import { AppointmentForm } from './components/AppointmentForm.jsx'
import { TestimonialsSection } from './components/TestimonialSection.jsx'
import { ContactSection } from './components/ContactSection.jsx'
import { Footer } from './components/Footer.jsx'

import './App.css'


function App() {

  return (
    <div className="app-container">
      <MyNavbar/>

      <HeroSection />

      <ServicesSection />

      <WhyChooseUs />

      <AppointmentForm />

      <TestimonialsSection />

      <ContactSection />

      <Footer />

    </div>
  )
}

export default App

// SITOWEB DA CUI COPIARE PERFETTAMENTE
// https://19hninc1d5g3.manussite.space/