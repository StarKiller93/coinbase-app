import React from 'react';
import HeroSection from '../components/HeroSection';
import heroContactImg from '../assets/images/hero-contact.svg';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <HeroSection
        heroImg={heroContactImg}
        heroTitle="24/7 Customer support
        Including weekends."
        heroText="We’re always there ti help regardless the number
        of queries at hand."
      />

      <ContactForm />

      <Map />
    </>
  );
}
