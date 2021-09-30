import React from 'react';
import HeroSection from '../components/HeroSection';
import heroAboutImg from '../assets/images/hero-about.svg';
import TimeLine from '../components/TimeLine';
import AboutInfoItem from '../components/AboutInfoItem';
import aboutInfoImg from '../assets/images/aboutInfoImg.svg';
import Newsletter from '../components/Newsletter';

export default function About() {
  return (
    <>
      <HeroSection
        heroImg={heroAboutImg}
        heroTitle="Great service, 
        Professional support"
        heroText="CoinBase is a platform for trading your bitcoin and 
        giftcard at the best rate, why not give us a trial."
      />

      <AboutInfoItem
        aboutInfoTitle="About CoinBase"
        aboutInfoImg={aboutInfoImg}
        aboutInfoText="CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria."
      />
      <TimeLine />
      <Newsletter />
    </>
  );
}
