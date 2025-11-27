import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Introduction from './components/Introduction';
import WhatIsInside from './components/WhatIsInside';
import Methods from './components/Methods';
import Bonus from './components/Bonus';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-cream text-brand-text">
      <Hero />
      <PainPoints />
      <Introduction />
      <WhatIsInside />
      <Methods />
      <Testimonials />
      <Bonus />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
