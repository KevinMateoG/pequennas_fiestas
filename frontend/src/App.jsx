import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CatalogPage from './pages/CatalogPage'
import HomePage from './pages/HomePage'
import ArtistDetailsPage from './pages/ArtistDetailsPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { OnboardingPage } from './pages/OnboardingPage'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/detail/:id" element={<ArtistDetailsPage />} />
        <Route path="/detail" element={<Navigate to="/catalog" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/onboarding/artista' element={<OnboardingPage />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
