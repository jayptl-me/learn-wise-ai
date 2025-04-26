
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { BookOpen, Clock, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced Calculus",
    description: "Master differentiation, integration, and applications of calculus in real-world problems.",
    category: "Mathematics",
    level: "Advanced",
    students: 1243,
    duration: "8 weeks",
    progress: 68,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Physics Mechanics",
    description: "Learn about forces, motion, energy, and the fundamental laws of classical mechanics.",
    category: "Physics",
    level: "Intermediate",
    students: 879,
    duration: "10 weeks",
    progress: 42,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Data Structures",
    description: "Explore arrays, linked lists, trees, graphs, and algorithms for efficient data manipulation.",
    category: "Computer Science",
    level: "Intermediate",
    students: 1502,
    duration: "12 weeks",
    progress: 85,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Organic Chemistry",
    description: "Study carbon compounds, reactions, and their applications in the pharmaceutical industry.",
    category: "Chemistry",
    level: "Advanced",
    students: 764,
    duration: "14 weeks",
    progress: 0,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "World History",
    description: "Explore major historical events and their impact on modern civilization.",
    category: "History",
    level: "Beginner",
    students: 895,
    duration: "8 weeks",
    progress: 0,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Molecular Biology",
    description: "Understand DNA, RNA, protein synthesis, and genetic engineering fundamentals.",
    category: "Biology",
    level: "Intermediate",
    students: 642,
    duration: "12 weeks",
    progress: 0,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const Courses = () => {
  const [filter, setFilter] = React.useState("all");
  
  const filteredCourses = React.useMemo(() => {
    if (filter === "all") return courses;
    if (filter === "in-progress") return courses.filter(course => course.progress > 0);
    if (filter === "not-started") return courses.filter(course => course.progress === 0);
    return courses.filter(course => course.category.toLowerCase() === filter);
  }, [filter]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">
              Courses
            </h1>
            <p className="mt-2 text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Browse our collection of interactive courses
            </p>
          </div>
        </div>
        
        <div className="mb-8 overflow-x-auto whitespace-nowrap pb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            onClick={() => setFilter("all")}
            className="mr-2"
          >
            All Courses
          </Button>
          <Button 
            variant={filter === "in-progress" ? "default" : "outline"} 
            onClick={() => setFilter("in-progress")}
            className="mr-2"
          >
            In Progress
          </Button>
          <Button 
            variant={filter === "not-started" ? "default" : "outline"} 
            onClick={() => setFilter("not-started")}
            className="mr-2"
          >
            Not Started
          </Button>
          <Button 
            variant={filter === "mathematics" ? "default" : "outline"} 
            onClick={() => setFilter("mathematics")}
            className="mr-2"
          >
            Mathematics
          </Button>
          <Button 
            variant={filter === "physics" ? "default" : "outline"} 
            onClick={() => setFilter("physics")}
            className="mr-2"
          >
            Physics
          </Button>
          <Button 
            variant={filter === "computer science" ? "default" : "outline"} 
            onClick={() => setFilter("computer science")}
            className="mr-2"
          >
            Computer Science
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <Card key={course.id} className="overflow-hidden animate-scale-in card-shadow" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="aspect-video w-full bg-gray-100"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.category}</CardDescription>
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students} students</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                {course.progress > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild variant="default" className="w-full">
                  <a href={`/courses/${course.id}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    {course.progress > 0 ? "Continue Learning" : "Start Course"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
