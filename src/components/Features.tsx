
import React from 'react';
import { 
  MessageCircle, 
  BookOpen, 
  Lightbulb, 
  BarChart, 
  Trophy,
  BadgeCheck
} from 'lucide-react';

const features = [
  {
    title: "AI Tutor",
    description: "Get personalized help from our AI tutor that adapts to your learning style.",
    icon: MessageCircle,
  },
  {
    title: "Smart Problem Solving",
    description: "Step-by-step guidance on complex problems with Wolfram Language integration.",
    icon: Lightbulb,
  },
  {
    title: "Personalized Learning Paths",
    description: "Custom learning paths that adapt to your strengths and knowledge gaps.",
    icon: BookOpen,
  },
  {
    title: "Instant Feedback",
    description: "Receive detailed feedback on your work to improve understanding.",
    icon: BadgeCheck,
  },
  {
    title: "Progress Analytics",
    description: "Track your learning progress with detailed analytics and insights.",
    icon: BarChart,
  },
  {
    title: "Gamification",
    description: "Earn points, badges, and compete with friends to stay motivated.",
    icon: Trophy,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className="flex flex-col p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow card-shadow animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="p-3 mb-4 rounded-full bg-brand-blue bg-opacity-10 w-fit">
        <feature.icon className="w-6 h-6 text-brand-blue" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark">
            Powerful Learning Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform combines cutting-edge technology with proven learning techniques.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
