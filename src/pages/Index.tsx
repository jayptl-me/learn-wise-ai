
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Features />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
