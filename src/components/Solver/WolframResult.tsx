
import React from 'react';
import { Card } from "../ui/card";

interface WolframResultProps {
  problem: string;
}

const WolframResult: React.FC<WolframResultProps> = ({ problem }) => {
  // This component would normally fetch results from Wolfram API
  // For now, we'll show mock visualizations based on the problem type
  
  // Determine what kind of visualization to show based on the problem text
  const showGraph = problem.toLowerCase().includes('function') || 
                    problem.toLowerCase().includes('plot') ||
                    problem.toLowerCase().includes('graph');
  
  const showEquation = problem.toLowerCase().includes('equation') || 
                       problem.toLowerCase().includes('solve') ||
                       problem.toLowerCase().includes('=');
  
  const showCalculus = problem.toLowerCase().includes('integral') || 
                       problem.toLowerCase().includes('derivative') ||
                       problem.toLowerCase().includes('differentiate');
  
  return (
    <div className="space-y-4">
      <Card className="p-4 bg-gray-50 border">
        <div className="font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <strong>Input interpretation:</strong><br />
          {problem}
        </div>
      </Card>
      
      {showEquation && (
        <Card className="p-4 border">
          <div className="font-mono text-sm mb-3">
            <strong>Solution:</strong>
          </div>
          <div className="flex justify-center p-4 bg-white">
            <div className="text-center">
              <div className="text-lg font-medium mb-2">x = 2.5</div>
              <div className="text-sm text-gray-500">or</div>
              <div className="text-lg font-medium mt-2">x = -1</div>
            </div>
          </div>
        </Card>
      )}
      
      {showCalculus && (
        <Card className="p-4 border">
          <div className="font-mono text-sm mb-3">
            <strong>Result:</strong>
          </div>
          <div className="flex justify-center p-4 bg-white">
            <div className="text-center">
              <div className="text-lg font-medium">
                {problem.toLowerCase().includes('integral') ? '∫ x^3 + 2x^2 - 5x + 3 dx = x^4/4 + 2x^3/3 - 5x^2/2 + 3x + C' : 
                '∂/∂x (sin(x^2) + ln(x)) = 2x·cos(x^2) + 1/x'}
              </div>
            </div>
          </div>
        </Card>
      )}
      
      {showGraph && (
        <Card className="p-4 border">
          <div className="font-mono text-sm mb-3">
            <strong>Plot:</strong>
          </div>
          <div className="flex justify-center p-4 bg-white">
            {/* This would be a real plot from Wolfram, for now show a placeholder */}
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
              <div className="text-gray-500">
                Graph visualization would appear here
                <br />
                (Wolfram API integration)
              </div>
            </div>
          </div>
        </Card>
      )}
      
      <Card className="p-4 border">
        <div className="font-mono text-sm mb-3">
          <strong>Alternative forms:</strong>
        </div>
        <div className="text-sm">
          {showEquation && (
            <div className="p-2">
              x² - 1.5x - 5 = 0
            </div>
          )}
          {showCalculus && (
            <div className="p-2">
              {problem.toLowerCase().includes('integral') ? 
                'x⁴/4 + (2x³)/3 - (5x²)/2 + 3x + constant' : 
                '2x cos(x²) + 1/x'}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default WolframResult;
