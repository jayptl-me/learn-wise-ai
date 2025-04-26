
import React from 'react';
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-blue to-brand-purple text-white">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to transform your learning experience?
          </h2>
          
          <p className="max-w-2xl mt-6 text-lg opacity-90">
            Join thousands of students who are already using AI to enhance their education.
          </p>
          
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/dashboard">
                Get Started for Free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
