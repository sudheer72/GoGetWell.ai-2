import React from 'react';
import Hero from '../components/home/Hero';
import Journey from '../components/home/Journey';
import Specialties from '../components/home/Specialties';
import TopHospitals from '../components/home/TopHospitals';
import TopDoctors from '../components/home/TopDoctors';
import ContactSection from '../components/home/ContactSection';
import { useThemeStore } from '../store/themeStore';

const HomePage: React.FC = () => {
  const { currentTheme } = useThemeStore();
  
  return (
    <div className={`theme-${currentTheme}`}>
      <Hero />
      <Journey />
      <Specialties />
      <TopHospitals />
      <TopDoctors />
      <ContactSection />
    </div>
  );
};

export default HomePage;