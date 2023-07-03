import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Navbar,Hero,Download,About,Clients,Testimonials,FAQ, AppDownload, Subscribe, Footer} from './components'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white dark:bg-back_dark'>
      <BrowserRouter  >
      <Navbar />
      <Hero />
      <Download to={'/about'} />
      <About />
      <Clients />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <Subscribe />
      <Footer />
    </BrowserRouter> 
    </div>   
  )
}

export default App
