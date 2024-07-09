import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Second from './pages/second'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/second" element={<Second/>} />
        {/* Redirect to /home as a default route */}
        <Route path="/" element={<Home/>}>
        </Route>
        </Routes>
    </Router>
  )
}

export default App
