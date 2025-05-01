import React, {useEffect, useState} from 'react'
import LoadingScreen from './components/LoadingScreen'
import "./index.css";
import Navbar from './components/Navbar';
import  Home from './components/Sections/Home';
import  About  from "./components/Sections/About";
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import SocialBar from './components/Sections/SocialConnect';

function App() {

  const [isLoaded, setLoaded] = useState(false)

  return (
    <>
        {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${ isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact /> 
        <SocialBar />
      </div>
    </>
  )
}

export default App
