import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Sustainability from './pages/Sustainability'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/urunlerimiz" element={<Products />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/surdurulebilirlik" element={<Sustainability />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
