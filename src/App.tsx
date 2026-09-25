import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Servicos from './pages/Servicos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
