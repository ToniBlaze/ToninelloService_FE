import React, { useState, useRef } from 'react'
import { Button } from './components/ui/button.jsx'
import { Input } from './components/ui/input.jsx'
import { Label } from './components/ui/label.jsx'
import { Textarea } from './components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select.jsx'
import { MyNavbar } from './components/navbar.jsx'

import './App.css'

import { HeroSection } from './components/HeroSection.jsx'
import { ServicesSection } from './components/ServiceSection.jsx'

import { services } from './data/services.js'
import { WhyChooseUs } from './components/WhyChooseUs.jsx'
import AppointmentForm from './components/AppointmentForm.jsx'

function App() {
  const [formData, setFormData] = useState({
    nome: '', telefono: '', email: '', servizio: '',
    data: '', ora: '', indirizzo: '', descrizione: '', note: ''
  })
  const [uploadedFiles, setUploadedFiles] = useState([])
  const fileInputRef = useRef(null)


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form inviato:', formData)
    alert('Richiesta creata (simulazione)')
  }

  return (
    <div className="app-container">
      <MyNavbar/>

      <HeroSection />

      <ServicesSection />

      <WhyChooseUs />

      <AppointmentForm />

      <section className="form-section">
        <h2>Richiedi un intervento</h2>
        <form onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input name="nome" value={formData.nome} onChange={handleChange} required />

          <Label>Telefono</Label>
          <Input name="telefono" value={formData.telefono} onChange={handleChange} required />

          <Label>Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <Label>Servizio richiesto</Label>
          <Select name="servizio" value={formData.servizio} onValueChange={(val) => setFormData(f => ({ ...f, servizio: val }))}>
            <SelectTrigger>
              <SelectValue placeholder="Seleziona un servizio" />
            </SelectTrigger>
            <SelectContent>
              {services.map(service => (
                <SelectItem key={service.id} value={service.title}>{service.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label>Data</Label>
          <Input type="date" name="data" value={formData.data} onChange={handleChange} required />

          <Label>Ora</Label>
          <Input type="time" name="ora" value={formData.ora} onChange={handleChange} required />

          <Label>Indirizzo</Label>
          <Input name="indirizzo" value={formData.indirizzo} onChange={handleChange} required />

          <Label>Descrizione</Label>
          <Textarea name="descrizione" value={formData.descrizione} onChange={handleChange} />

          <Label>Note aggiuntive</Label>
          <Textarea name="note" value={formData.note} onChange={handleChange} />

          <Button type="submit">Invia richiesta</Button>
        </form>
      </section>
    </div>
  )
}

export default App

// SITOWEB DA CUI COPIARE PERFETTAMENTE
// https://19hninc1d5g3.manussite.space/