import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import profile_picture from '../public/profile_picture.jpeg'

function App() {
  return (
    <div className="flex justify-around">
      {/*
      <a 
        href="Aidan_Smagh_Resume.pdf"
        target="_blank"
        className="bg-blue-500 px-4 py-3 text-white hover:bg-blue-400 w-64 rounded-md"
      >
        View Resumehttp://localhost:5173/public/profile_picture.jpeg
      </a>
      */}
      <div className="mt-30 font-noto">
        <h1>Hello!</h1>
        <h1>My name is <span className="font-bold">Aidan Smagh</span></h1>
      </div>
      <img src={profile_picture} className="w-64 h-64 rounded-full object-cover mt-50"/>
    </div>
    );
}

export default App
