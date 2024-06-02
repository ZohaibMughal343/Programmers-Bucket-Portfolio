import React from 'react'
import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../AboutSection/AboutSection';
import High_Light from '../High_Light/High_Light';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import Services from '../Services/Services';
import OurDeveloper from '../OurDeveloper/OurDeveloper';
import FormSection from '../FormSection/FormSection';
import AnimatedCursor from 'react-animated-cursor'
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <High_Light />
      <OurPortfolio />
      <Services />
      <OurDeveloper />
      <FormSection />
      <Footer />
      <AnimatedCursor
        innerSize={23}
        outerSize={23}
        color="255, 180, 19"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={3.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".swiper-pagination-bullet",
        ]}
      />
    </>
  )
}

export default Home
