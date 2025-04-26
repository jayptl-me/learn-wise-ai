import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/button";
import { 
  BookOpen, 
  MessageCircle, 
  Settings,
  User,
  Home as HomeIcon
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { toast } = useToast();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary transition-colors';
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Floating Navigation */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <div className="mx-4 mt-4">
          <div className="container bg-card/80 backdrop-blur-md border rounded-xl shadow-lg">
            <div className="flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold tracking-tight">LearnWise</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                <Link to="/courses" className={isActive('/courses')}>Courses</Link>
                <Link to="/tutor" className={isActive('/tutor')}>AI Tutor</Link>
                <Link to="/solver" className={isActive('/solver')}>Problem Solver</Link>
              </nav>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Settings className="w-5 h-5" />
                </Button>
                
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="mx-4 mb-4">
          <div className="flex items-center justify-around h-16 bg-card/80 backdrop-blur-md border rounded-xl shadow-lg">
            <Link to="/" className="flex flex-col items-center justify-center w-full text-muted-foreground hover:text-primary">
              <HomeIcon className="w-5 h-5" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link to="/dashboard" className="flex flex-col items-center justify-center w-full text-muted-foreground hover:text-primary">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs mt-1">Dashboard</span>
            </Link>
            <Link to="/tutor" className="flex flex-col items-center justify-center w-full text-muted-foreground hover:text-primary">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs mt-1">AI Tutor</span>
            </Link>
            <Link to="/settings" className="flex flex-col items-center justify-center w-full text-muted-foreground hover:text-primary">
              <Settings className="w-5 h-5" />
              <span className="text-xs mt-1">Settings</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t py-6 md:py-8">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">LearnWise</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Learn smarter with AI</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Terms</a>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left text-xs text-muted-foreground">
            © 2025 LearnWise. Made for Tech Titans Hack Fest.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
