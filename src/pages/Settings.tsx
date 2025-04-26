
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Switch } from "../components/ui/switch";
import { Slider } from "../components/ui/slider";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Settings, Accessibility, Bell, User } from 'lucide-react';

const SettingsPage = () => {
  const [fontSize, setFontSize] = useState([16]);
  const [highContrast, setHighContrast] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true);
  const { toast } = useToast();
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully",
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">
            Settings
          </h1>
          <p className="mt-2 text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Customize your learning experience
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <Card className="shadow-md sticky top-24 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 p-2">
                  <div className="px-3 py-2 rounded-md bg-gray-100 flex items-center">
                    <Accessibility className="mr-2 h-4 w-4 text-brand-blue" />
                    <span className="font-medium">Accessibility</span>
                  </div>
                  <div className="px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer flex items-center">
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </div>
                  <div className="px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </div>
                  <div className="px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>General</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card className="shadow-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Accessibility Settings</CardTitle>
                <CardDescription>Customize how content is displayed and interacted with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="font-size" className="text-base font-medium">Font Size</Label>
                      <p className="text-sm text-gray-500">Adjust the size of text throughout the application</p>
                    </div>
                    <div className="w-1/3">
                      <Slider 
                        id="font-size"
                        min={12} 
                        max={24} 
                        step={1}
                        value={fontSize} 
                        onValueChange={setFontSize}
                      />
                      <div className="mt-1 text-right text-sm text-gray-500">{fontSize}px</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="high-contrast" className="text-base font-medium">High Contrast Mode</Label>
                      <p className="text-sm text-gray-500">Increase color contrast for better readability</p>
                    </div>
                    <Switch 
                      id="high-contrast"
                      checked={highContrast} 
                      onCheckedChange={setHighContrast} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="text-to-speech" className="text-base font-medium">Text-to-Speech</Label>
                      <p className="text-sm text-gray-500">Enable reading of text content aloud</p>
                    </div>
                    <Switch 
                      id="text-to-speech"
                      checked={textToSpeech} 
                      onCheckedChange={setTextToSpeech} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="animations" className="text-base font-medium">Show Animations</Label>
                      <p className="text-sm text-gray-500">Enable or disable UI animations</p>
                    </div>
                    <Switch 
                      id="animations"
                      checked={showAnimations} 
                      onCheckedChange={setShowAnimations} 
                    />
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="language" className="text-base font-medium">Language</Label>
                      <p className="text-sm text-gray-500">Select your preferred language</p>
                    </div>
                    <div className="w-1/3">
                      <Select defaultValue="english">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="theme" className="text-base font-medium">Theme</Label>
                      <p className="text-sm text-gray-500">Choose your preferred visual theme</p>
                    </div>
                    <div className="w-1/3">
                      <Select defaultValue="light">
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System Default</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-800 text-sm">
                  <p className="font-medium">Accessibility Preview</p>
                  <p className="mt-1">These settings will affect how content is displayed throughout the application.</p>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-between">
                <Button variant="outline">Reset to Defaults</Button>
                <Button onClick={handleSaveSettings}>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
