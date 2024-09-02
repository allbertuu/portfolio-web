import { initScrollReveal } from '@/assets/scripts/scrollReveal';
import { useEffect } from 'react';
import { AboutMeSection } from './components/AboutMeSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IntroductionSection } from './components/IntroductionSection';
import { SideProjectsSection } from './components/SideProjectsSection';
import { ToTop } from './components/ToTop';

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <>
      <Header />

      <main>
        <IntroductionSection />
        <SideProjectsSection />
        <AboutMeSection />
      </main>

      <Footer />

      <ToTop />
    </>
  );
}

export default App;
