import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './page/Inicio.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
         <div className="bg-zinc-900 min-h-screen text-white">
           <Routes>
             <Route path="/" element={<Inicio />} />
             {/* Aquí agregarás las otras páginas después */}
             </Routes>
             </div>
             </Router>
    </>
  )
}

export default App
