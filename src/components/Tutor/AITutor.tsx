
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BookOpen, Send, Mic, Image, Paperclip, BookCheck, Settings, Save } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import TutorSidebar from './TutorSidebar';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
};

const AITutor = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: "Hi there! I'm your AI tutor. How can I help you with your studies today?",
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      const responses = [
        "I can help explain that concept. Let's break it down step by step...",
        "That's a great question! The key to understanding this is...",
        "Based on your previous questions, I think you might benefit from looking at this from a different angle...",
        "I've analyzed your question and here's how we can approach this problem..."
      ];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      toast({
        title: "New response",
        description: "AI tutor has responded to your question",
      });
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <Card className="border shadow-md animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-brand-blue">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-white">AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>AI Tutor</CardTitle>
                    <CardDescription>Ask questions about any subject</CardDescription>
                  </div>
                </div>
                <Tabs defaultValue="chat">
                  <TabsList>
                    <TabsTrigger value="chat">Chat</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="h-[500px] overflow-y-auto mb-4 space-y-4 p-1">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user' 
                          ? 'bg-brand-blue text-white rounded-tr-none' 
                          : 'bg-gray-100 text-gray-900 rounded-tl-none'
                      }`}
                    >
                      <p>{message.content}</p>
                      <div 
                        className={`text-xs mt-1 ${
                          message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter>
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <div className="hidden md:flex gap-1">
                  <Button type="button" size="icon" variant="ghost">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button type="button" size="icon" variant="ghost">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button type="button" size="icon" variant="ghost">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                </div>
                
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="flex-1"
                />
                
                <Button type="submit" disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                  <span className="ml-2 hidden md:inline">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
        
        <div className="lg:w-1/4">
          <TutorSidebar />
        </div>
      </div>
    </div>
  );
};

export default AITutor;
