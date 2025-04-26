
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    quote: "The AI tutor helped me understand calculus concepts that I struggled with for months. It's like having a personal tutor available 24/7.",
    name: "Alex Johnson",
    role: "Computer Science Student",
    avatar: "AJ"
  },
  {
    quote: "The step-by-step problem solving really helped me build confidence in my math skills. I can now approach difficult problems without anxiety.",
    name: "Maria Garcia",
    role: "High School Senior",
    avatar: "MG"
  },
  {
    quote: "I love how the platform adapts to my learning pace. It challenges me when I need it, but doesn't overwhelm me when I'm struggling.",
    name: "Jamal Williams",
    role: "Engineering Student",
    avatar: "JW"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark">
            What Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform has helped thousands of students excel in their studies.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="p-6 bg-white rounded-lg shadow-md hover-scale animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-4">
                <svg className="h-6 w-6 text-brand-purple opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-4 text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-brand-purple text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
