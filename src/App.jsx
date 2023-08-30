import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import Staff from './pages/Staff'
import Servicios from './pages/Servicios'
import Contact from './pages/Contact'

// componenetes 
import Nav from './components/Nav'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {

  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(!true)
  }, 3000)

  return (
    <>
      <HashRouter>

        { loader && <Loader/>}

        <header>
          <nav>
            <Nav />
          </nav>
        </header>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/staff" element={ <Staff/> } />
          <Route path="/servicios" element={ <Servicios/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>

        <Footer/>

      </HashRouter>
    </>
  )
}

export default App
