import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import PainPoints from './components/sections/PainPoints';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import ReadyToStart from './components/sections/ReadyToStart';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PainPoints />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ReadyToStart />
      <Footer />
    </>
  );
}


export default App;
