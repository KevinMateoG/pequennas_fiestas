import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../features/landing/HeroSection'
import FeatureGrid from '../features/landing/FeatureGrid'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className="hero-gradient min-h-screen">
                <HeroSection />
                <FeatureGrid />
            </main>
            <Footer />
        </>
    )
}
