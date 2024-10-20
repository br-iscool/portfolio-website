import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'

import './css/index.css'
import './css/scroll-animate.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <>
      {/* TODO
        Do about me section
        Make the header look better (centered island?)
        animate on scroll? (testing with keyframes)
        <noscript> tag
        compatible on mobile (center the divs and make it overlap)
        make it so that box-shader doesnt break when resizing window
        turn off / on shader button
        Go through css and remove redundant (from .nav-logo) and convert to tailwind
        Make footer 

        */}

      <Navbar/>
      <Home/>
      <About/>
    </>

  </StrictMode>,
)
