import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tentang from '../components/Tentang'
import Potensi from '../components/Potensi'
import Peta from '../components/Peta'
import Kegiatan from '../components/Kegiatan'
import Petunjuk from '../components/Petunjuk'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Tentang />
        <Potensi />
        <Peta />
        <Kegiatan />
        <Petunjuk />
        <Footer />
    </div>
  )
}

export default Home