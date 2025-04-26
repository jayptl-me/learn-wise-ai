
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BarChart, LineChart, Legend, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data
const weeklyData = [
  { day: 'Mon', hours: 2.5, problems: 15 },
  { day: 'Tue', hours: 1.8, problems: 8 },
  { day: 'Wed', hours: 3.2, problems: 23 },
  { day: 'Thu', hours: 2.0, problems: 12 },
  { day: 'Fri', hours: 2.8, problems: 18 },
  { day: 'Sat', hours: 4.5, problems: 30 },
  { day: 'Sun', hours: 1.5, problems: 10 },
];

const monthlyData = [
  { week: 'Week 1', hours: 12.5, accuracy: 68 },
  { week: 'Week 2', hours: 15.2, accuracy: 72 },
  { week: 'Week 3', hours: 10.8, accuracy: 78 },
  { week: 'Week 4', hours: 18.3, accuracy: 85 },
];

const subjectData = [
  { name: 'Math', hours: 22, accuracy: 81 },
  { name: 'Physics', hours: 18, accuracy: 75 },
  { name: 'CS', hours: 15, accuracy: 88 },
  { name: 'Biology', hours: 8, accuracy: 70 },
];

const LearningProgress = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <CardHeader>
        <CardTitle>Learning Analytics</CardTitle>
        <CardDescription>Track your progress and performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="subjects">By Subject</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" stroke="#1EAEDB" />
                <YAxis yAxisId="right" orientation="right" stroke="#9b87f5" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="hours" name="Study Hours" fill="#1EAEDB" />
                <Bar yAxisId="right" dataKey="problems" name="Problems Solved" fill="#9b87f5" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="monthly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis yAxisId="left" orientation="left" stroke="#1EAEDB" />
                <YAxis yAxisId="right" orientation="right" stroke="#9b87f5" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="hours" name="Total Hours" stroke="#1EAEDB" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="accuracy" name="Accuracy (%)" stroke="#9b87f5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="subjects" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#1EAEDB" />
                <YAxis yAxisId="right" orientation="right" stroke="#9b87f5" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="hours" name="Study Hours" fill="#1EAEDB" />
                <Bar yAxisId="right" dataKey="accuracy" name="Accuracy (%)" fill="#9b87f5" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LearningProgress;
