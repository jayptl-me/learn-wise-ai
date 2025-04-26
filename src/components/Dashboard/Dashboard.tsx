
import React from 'react';
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { BookCheck, BookOpen, MessageCircle, BarChart } from 'lucide-react';
import RecommendedCourses from './RecommendedCourses';
import LearningProgress from './LearningProgress';

const Dashboard = () => {
  // Mock data
  const userName = "Emma";
  const courses = [
    { id: 1, title: "Advanced Calculus", progress: 68, category: "Mathematics" },
    { id: 2, title: "Physics Mechanics", progress: 42, category: "Physics" },
    { id: 3, title: "Data Structures", progress: 85, category: "Computer Science" },
  ];
  
  return (
    <div className="container px-4 mx-auto py-8 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">
            Welcome back, {userName}!
          </h1>
          <p className="mt-2 text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Continue your learning journey from where you left off.
          </p>
        </div>
        <div className="mt-4 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button asChild className="bg-brand-blue hover:bg-brand-lightblue">
            <a href="/tutor">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with AI Tutor
            </a>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={course.id} className="animate-scale-in card-shadow" style={{ animationDelay: `${0.1 * index}s` }}>
            <CardHeader className="pb-3">
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </CardContent>
            <CardFooter className="pt-3">
              <Button asChild variant="outline" className="w-full">
                <a href={`/courses/${course.id}`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Continue Learning
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 mt-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <RecommendedCourses />
        </div>
        <div>
          <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookCheck className="mr-2 h-5 w-5 text-brand-blue" />
                Study Streak
              </CardTitle>
              <CardDescription>Your learning consistency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <span className="text-4xl font-bold text-brand-blue">7</span>
                <p className="text-sm text-gray-600 mt-1">Days in a row</p>
                <div className="flex justify-between mt-4">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${i < 7 ? 'bg-brand-blue' : 'bg-gray-200'} text-white text-xs`}>
                        {i + 1}
                      </div>
                      <span className="text-xs text-gray-500">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-brand-purple" />
                Weekly Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Study Hours</span>
                    <span className="text-sm font-medium">8/10 hrs</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Practice Problems</span>
                    <span className="text-sm font-medium">15/20</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Quiz Completion</span>
                    <span className="text-sm font-medium">3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8">
        <LearningProgress />
      </div>
    </div>
  );
};

export default Dashboard;
