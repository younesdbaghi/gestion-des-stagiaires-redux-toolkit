import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Affichage from './Affichage'
import Edit from './Edit'

export default function RoutesGenerator() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Affichage/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </Router>
  )
}
