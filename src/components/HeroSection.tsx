
import React from 'react';
import { Button } from "./ui/button";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-brand-lightblue blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-brand-purple blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-dark md:text-5xl lg:text-6xl animate-fade-in">
            Learn Smarter with AI
          </h1>
          
          <p className="max-w-2xl mt-6 text-lg text-gray-600 md:text-xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Personalized tutoring, interactive problem-solving, and adaptive learning powered by artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-lightblue text-white font-medium">
              <Link to="/dashboard">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/tutor">
                Try AI Tutor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
