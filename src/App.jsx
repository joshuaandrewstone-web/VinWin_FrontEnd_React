import { useState } from 'react'
import './App.css'
import MainForm from './assets/components/registrationForm'
import Header from './assets/components/header'
import Footer from './assets/components/footer'

function App() {
  return (
    <>
      <Header/>
      <MainForm/>
      <Footer />
    </>
  )
}

export default App
