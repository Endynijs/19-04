
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Realisaties from './Realisaties.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/realisaties" element={<Realisaties />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
