import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CatalogPage from './pages/CatalogPage'
import HomePage from './pages/HomePage'
import ArtistDetailsPage from './pages/ArtistDetailsPage'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/detail" element={<ArtistDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
