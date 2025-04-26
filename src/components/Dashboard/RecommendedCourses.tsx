
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// Mock data
const recommendations = [
  {
    id: 1,
    title: "Introduction to Quantum Physics",
    description: "Learn the fundamental principles of quantum mechanics and its applications.",
    tag: "Physics",
    level: "Intermediate",
    match: 95
  },
  {
    id: 2,
    title: "Linear Algebra Foundations",
    description: "Master the essential concepts of linear algebra with practical examples.",
    tag: "Mathematics",
    level: "Beginner",
    match: 89
  },
  {
    id: 3,
    title: "Algorithm Design & Analysis",
    description: "Learn how to design efficient algorithms and analyze their complexity.",
    tag: "Computer Science",
    level: "Advanced",
    match: 82
  }
];

const RecommendedCourses = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <CardHeader>
        <CardTitle>Recommended for You</CardTitle>
        <CardDescription>Based on your learning history and goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((course, index) => (
            <div 
              key={course.id}
              className="flex flex-col md:flex-row justify-between items-start p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="mb-3 md:mb-0">
                <div className="flex items-center mb-2">
                  <h3 className="font-medium">{course.title}</h3>
                  <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                    {course.match}% match
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                <div className="flex space-x-2">
                  <Badge variant="secondary">{course.tag}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <a href={`/courses/${course.id}`}>
                    Explore Course
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedCourses;
