import React from 'react';
import HeroSection from '../components/HeroSection';
import heroImg from '../assets/images/hero-img.svg';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import Faq from '../components/Faq';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection
        heroBtn
        light
        heroImg={heroImg}
        heroTitle="We provide easy solution 
to exchange your"
        heroTitleSpan="Bitcoin/ 
GiftCard for money"
        heroText="CoinBase is a platform for trading your bitcoin and 
giftcard at the best rate, why not give us a trial."
      />
      <AboutSection />
      <ExperienceSection />
      <Faq />
      <Newsletter />
    </>
  );
}
