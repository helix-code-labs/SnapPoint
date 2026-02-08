import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import PainPoints from './components/sections/PainPoints';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PainPoints />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
