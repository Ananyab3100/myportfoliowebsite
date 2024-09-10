import { useState } from 'react'

import './App.css'
import Header from './components/Header'

import Icon from './components/Icon'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import ContactForm from './components/Contact'



function App() {
  const [activeIcon, setActiveIcon] = useState(null);
  
  return (
    <>
    <BrowserRouter>
    <div className="bg-checkered-gray bg-amber-50 bg-checkered-gray min-h-screen py-10 px-6 md:py-8 md:px-20  ">
    
    <div className="flex space-x-2 md:space-x-4 fixed  top-0 right-4 md:right-10 z-100">
    <Icon to="#home" color="bg-gray-300" isActive={activeIcon ==='#home'} onClick={() => setActiveIcon('#home')}/>
    <Icon to="#skills" color="bg-gray-400" isActive={activeIcon ==='#skills'} onClick={() => setActiveIcon('#skills')}/>
    <Icon to="#projects" color="bg-gray-500" isActive={activeIcon ==='#projects'} onClick={() => setActiveIcon('#projects')}/>
    <Icon to="#contact" color="bg-gray-600" isActive={activeIcon ==='#contact'} onClick={() => setActiveIcon('#contact')}/>
    
    </div>
   
   <div className="container mx-auto  p-2 md:p-6 rounded-lg ">
   
   <section id="home" >
   <Header/>
   <Home/>
   </section>
   <section id="skills" >

   </section>
   <section id="projects" >
   <Projects />
   </section>
   <section id="contact" >
   
   <ContactForm />
   </section>

   </div>

   </div>
   </BrowserRouter>
    </>
  )
}

export default App
