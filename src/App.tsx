import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ServicesSection from './components/ServicesSection'
import PricingSection from './components/PricingSection'
import WhySection from './components/WhySection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimoniSection from './components/TestimoniSection'
import PortfolioSection from './components/PortfolioSection'
import ShowcaseSection from './components/ShowcaseSection'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <PricingSection />
        <WhySection />
        <HowItWorksSection />
        <TestimoniSection />
        <PortfolioSection />
        <ShowcaseSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
