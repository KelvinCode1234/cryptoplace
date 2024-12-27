import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import ComingSoon from './components/ComingSoon/ComingSoon'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path="/features" element={<ComingSoon />} />
        <Route path="/pricing" element={<ComingSoon />} />
        <Route path="/blog" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
