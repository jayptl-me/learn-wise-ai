
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calculator, Lightbulb, ChevronRight, BookOpen } from 'lucide-react';
import WolframResult from './WolframResult';
import StepByStepGuide from './StepByStepGuide';
import { useToast } from "@/hooks/use-toast";

const ProblemSolver = () => {
  const [problem, setProblem] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSolveProblem = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!problem.trim()) {
      toast({
        title: "Error",
        description: "Please enter a problem to solve",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      toast({
        title: "Problem analyzed",
        description: "The solution has been generated",
      });
    }, 2000);
  };

  const sampleProblems = [
    "Calculate the indefinite integral of x^3 + 2x^2 - 5x + 3",
    "If a rock is thrown upward with an initial velocity of 20 m/s, how high will it go?",
    "Find the derivative of f(x) = sin(x^2) + ln(x)"
  ];

  const selectSampleProblem = (problem: string) => {
    setProblem(problem);
    setIsSubmitted(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <div className="mb-8 text-center animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Problem Solver</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Powered by Wolfram language, our solver provides step-by-step solutions to your math, physics, and engineering problems.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="shadow-md h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-brand-blue" />
                Problem Input
              </CardTitle>
              <CardDescription>Enter your problem below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSolveProblem}>
                <Textarea
                  placeholder="Example: Solve 2x^2 + 3x - 5 = 0"
                  className="min-h-[150px] mb-4"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-lightblue"
                  disabled={!problem.trim() || isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Solve Problem
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2 text-sm">Try these examples:</h4>
                <div className="space-y-2">
                  {sampleProblems.map((example, index) => (
                    <p 
                      key={index} 
                      onClick={() => selectSampleProblem(example)}
                      className="text-sm text-brand-blue hover:text-brand-lightblue cursor-pointer transition-colors"
                    >
                      {example}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Card className="shadow-md h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-brand-purple" />
                  Solution
                </CardTitle>
                <Tabs defaultValue="visual">
                  <TabsList>
                    <TabsTrigger value="visual">Visual</TabsTrigger>
                    <TabsTrigger value="step-by-step">Step-by-Step</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <CardDescription>
                {isSubmitted ? 'Here\'s the solution to your problem:' : 'Enter a problem to see the solution'}
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[400px]">
              {!isSubmitted && (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 p-6">
                  <BookOpen className="h-12 w-12 mb-4 opacity-30" />
                  <h3 className="text-lg font-medium mb-2">No problem submitted yet</h3>
                  <p>Enter a mathematical or scientific problem and click "Solve Problem" to see the solution.</p>
                </div>
              )}
              
              {isSubmitted && (
                <TabsContent value="visual" className="mt-0">
                  <WolframResult problem={problem} />
                </TabsContent>
              )}
              
              {isSubmitted && (
                <TabsContent value="step-by-step" className="mt-0">
                  <StepByStepGuide problem={problem} />
                </TabsContent>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4 text-xs text-gray-500">
              Powered by Wolfram Language integration
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolver;
