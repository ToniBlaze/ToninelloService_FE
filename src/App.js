import React, { useState, useRef } from 'react'
import { Button } from './components/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/card.jsx'
import { Input } from './components/input.jsx'
import { Label } from './components/label.jsx'
import { Textarea } from './components/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/select.jsx'
import { Badge } from './components/badge.jsx'
import { MyNavbar } from './components/navbar.jsx'

import {
  Zap, Wrench, Hammer, Settings, CheckCircle, Paintbrush
} from 'lucide-react'

import './App.css'

import elettricista from './assets/images/elettricista.jpg'
import idraulico from './assets/images/idraulico.jpg'
import muratore from './assets/images/muratore.jpg'
import montatoreMobili from './assets/images/montatore-mobili.jpg'
import meccanico from './assets/images/meccanico.jpg'
import imbianchino from './assets/images/imbianchino.jpg'
import bolognaSkyline from './assets/images/bologna.jpg'

function App() {
  const [formData, setFormData] = useState({
    nome: '', telefono: '', email: '', servizio: '',
    data: '', ora: '', indirizzo: '', descrizione: '', note: ''
  })
  const [uploadedFiles, setUploadedFiles] = useState([])
  const fileInputRef = useRef(null)

  const services = [
    {
      id: 'elettricista',
      title: 'Servizi Elettrici',
      icon: <Zap className="w-8 h-8" />,
      description: 'Impianti elettrici, riparazioni, installazioni sicure e a norma',
      image: elettricista,
      features: ['Pronto intervento 24/7', 'Certificazioni', 'Installazione LED']
    },
    {
      id: 'idraulico',
      title: 'Servizi Idraulici',
      icon: <Wrench className="w-8 h-8" />,
      description: 'Riparazioni perdite, installazione sanitari, sblocco scarichi',
      image: idraulico,
      features: ['Intervento rapido', 'Videoispezioni', 'Riparazione caldaie']
    },
    {
      id: 'muratore',
      title: 'Opere Murarie',
      icon: <Hammer className="w-8 h-8" />,
      description: 'Ristrutturazioni, riparazioni, piccole e grandi opere murarie',
      image: muratore,
      features: ['Ristrutturazioni complete', 'Cartongesso', 'Isolamento termico']
    },
    {
      id: 'montatore',
      title: 'Montaggio Mobili',
      icon: <Settings className="w-8 h-8" />,
      description: 'Montaggio professionale mobili IKEA e altri brand',
      image: montatoreMobili,
      features: ['Montaggio IKEA', 'Cucine componibili', 'Smontaggio traslochi']
    },
    {
      id: 'meccanico',
      title: 'Riparazioni Meccaniche',
      icon: <Settings className="w-8 h-8" />,
      description: 'Riparazioni generiche meccaniche per oggetti domestici',
      image: meccanico,
      features: ['Cambio pezzi', 'Diagnosi guasti', 'Manutenzione']
    },
    {
      id: 'imbianchino',
      title: 'Imbianchino',
      icon: <Paintbrush className="w-8 h-8" />,
      description: 'Pitture interne, esterne, decorazioni e rasature',
      image: imbianchino,
      features: ['Colori personalizzati', 'Effetti decorativi', 'Vernici lavabili']
    }
  ]

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
      <header className="hero" style={{ backgroundImage: `url(${bolognaSkyline})` }}>
        <h1>Toninello Service</h1>
        <p>Assistenza professionale in tutta la zona</p>
      </header>

      <section className="services">
        {services.map(service => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <div>{service.icon}</div>
            </CardHeader>
            <CardContent>
              <img src={service.image} alt={service.title} className="service-img" />
              <CardDescription>{service.description}</CardDescription>
              <div className="badges">
                {service.features.map((feature, index) => (
                  <Badge key={index}>{feature}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

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