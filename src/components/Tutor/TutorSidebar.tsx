
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BookOpen, BookCheck, Save } from 'lucide-react';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const suggestedTopics = [
  "Derivative Rules",
  "Newton's Laws of Motion",
  "Quadratic Equations",
  "DNA Replication",
  "Object-Oriented Programming"
];

const recentQuestions = [
  "How do I solve differential equations?",
  "Explain photosynthesis simply",
  "What is the law of conservation of energy?"
];

const TutorSidebar = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-brand-blue" />
            Suggested Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {suggestedTopics.map((topic) => (
              <Badge 
                key={topic} 
                variant="secondary"
                className="hover:bg-brand-blue hover:text-white cursor-pointer transition-colors"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <BookCheck className="mr-2 h-5 w-5 text-brand-purple" />
            Recent Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recentQuestions.map((question, index) => (
              <li 
                key={index} 
                className="text-sm hover:text-brand-blue transition-colors cursor-pointer border-b pb-2 last:border-0 last:pb-0"
              >
                {question}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Save className="mr-2 h-5 w-5 text-brand-blue" />
            Learning Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start text-left">
              <span className="truncate">Practice Problems</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left">
              <span className="truncate">Video Tutorials</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left">
              <span className="truncate">PDF Resources</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TutorSidebar;
