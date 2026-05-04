import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
    );
}

export default App
