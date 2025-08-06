import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import MissionSection from '../components/MissionSection';
import ProgramCards from '../components/ProgramCards';
import ImpactStats from '../components/ImpactStats';
import TestimonialSection from '../components/TestimonialSection';
import VolunteerSection from '../components/VolunteerSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';

import { 
  heroSlides, 
  programs, 
  impactStats, 
  additionalStats,
  testimonials,
  footerNavigation,
  contactInfo
} from '../data/mockData';

const Home = () => {
  return (
    <main>
      <HeroCarousel slides={heroSlides} />
      
      <MissionSection
        title="WELCOME TO OUR ORGANIZATION"
        description="Our organization is a Non-Profit Organization with a main focus on enhancing public programs' effectiveness and strengthening community programs by reaching out to the socially and economically underprivileged sections of society both in rural and urban areas.\n\nWe believe in empowering communities through education, skill development, and healthcare initiatives to create lasting positive change and help people build better futures for themselves and their families."
        imageUrl="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg"
        buttonText="Read More"
        buttonLink="/about"
      />
      
      <ImpactStats 
        stats={impactStats} 
        title="Our Impact"
        backgroundColor="bg-orange-500"
      />
      
      <ProgramCards 
        title="Our Programs"
        description="We work across multiple areas to create holistic change in communities"
        programs={programs}
      />
      
      <TestimonialSection 
        testimonials={testimonials}
        title="Success Stories"
        subtitle="Hear from the people whose lives have been transformed through our programs"
      />
      
      <VolunteerSection
        title="Become a Volunteer"
        subtitle="Join our team of passionate volunteers who are making a difference in communities across the country. Your time and skills can help change lives."
        imageUrl="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
        buttonText="JOIN WITH US"
        buttonLink="/volunteers"
      />
      
      <ImpactStats 
        stats={additionalStats} 
        backgroundColor="bg-gray-800"
      />
      
      <DonationSection />

      <Footer 
        logo="https://images.pexels.com/photos/7715276/pexels-photo-7715276.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        contactInfo={contactInfo}
        navigation={footerNavigation}
      />
    </main>
  );
};

export default Home;