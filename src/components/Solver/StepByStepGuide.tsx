
import React from 'react';
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface StepByStepGuideProps {
  problem: string;
}

const StepByStepGuide: React.FC<StepByStepGuideProps> = ({ problem }) => {
  // Generate mock steps based on problem type
  const steps = React.useMemo(() => {
    if (problem.toLowerCase().includes('integral')) {
      return [
        { 
          title: "Identify the function to integrate", 
          content: "We need to find the indefinite integral of f(x) = x^3 + 2x^2 - 5x + 3",
          hint: "Remember that the indefinite integral gives us a family of functions."
        },
        { 
          title: "Apply the power rule for each term", 
          content: "For each term x^n, the integral is x^(n+1)/(n+1) + C.",
          hint: "The power rule states: ∫x^n dx = x^(n+1)/(n+1) + C, where n ≠ -1."
        },
        { 
          title: "Integrate term by term", 
          content: "∫x^3 dx = x^4/4\n∫2x^2 dx = 2x^3/3\n∫(-5x) dx = -5x^2/2\n∫3 dx = 3x",
          hint: "We can separate the integral into individual terms because integration is a linear operation."
        },
        { 
          title: "Combine all terms", 
          content: "∫(x^3 + 2x^2 - 5x + 3) dx = x^4/4 + 2x^3/3 - 5x^2/2 + 3x + C",
          hint: "Don't forget to add the constant of integration C to represent all possible antiderivatives."
        }
      ];
    } 
    else if (problem.toLowerCase().includes('velocity') || problem.toLowerCase().includes('rock')) {
      return [
        { 
          title: "Identify the physics problem", 
          content: "We have an object thrown upward with initial velocity v₀ = 20 m/s, and we need to find its maximum height.",
          hint: "This is a kinematics problem involving vertical motion under constant gravity."
        },
        { 
          title: "Recall relevant equations", 
          content: "For motion under constant acceleration: v² = v₀² + 2a(y - y₀)\nWhere v is final velocity, v₀ is initial velocity, a is acceleration, y is final position, y₀ is initial position.",
          hint: "At the peak of the trajectory, the velocity momentarily becomes zero."
        },
        { 
          title: "Set up the equation with known values", 
          content: "At maximum height, v = 0 m/s (momentarily at rest)\nv₀ = 20 m/s (initial velocity)\na = -9.8 m/s² (gravity is negative as it points downward)\ny₀ = 0 m (starting at ground level)\n\n0² = 20² + 2(-9.8)(y - 0)",
          hint: "We're setting the left side to zero because the velocity at the peak is zero."
        },
        { 
          title: "Solve for the height", 
          content: "0 = 400 - 19.6y\n19.6y = 400\ny = 400/19.6\ny ≈ 20.41 meters",
          hint: "The maximum height depends only on the initial velocity and the gravitational acceleration."
        }
      ];
    }
    else if (problem.toLowerCase().includes('derivative')) {
      return [
        { 
          title: "Identify the function to differentiate", 
          content: "We need to find the derivative of f(x) = sin(x²) + ln(x)",
          hint: "We'll need to use both the chain rule and basic derivative rules."
        },
        { 
          title: "Apply the sum rule", 
          content: "The derivative of a sum is the sum of the derivatives:\nf'(x) = d/dx[sin(x²)] + d/dx[ln(x)]",
          hint: "Differentiate each term separately, then add the results."
        },
        { 
          title: "Find the derivative of sin(x²) using the chain rule", 
          content: "d/dx[sin(x²)] = cos(x²) · d/dx[x²] = cos(x²) · 2x = 2x·cos(x²)",
          hint: "The chain rule states: d/dx[f(g(x))] = f'(g(x)) · g'(x)"
        },
        { 
          title: "Find the derivative of ln(x)", 
          content: "d/dx[ln(x)] = 1/x",
          hint: "The derivative of ln(x) is always 1/x"
        },
        { 
          title: "Combine the results", 
          content: "f'(x) = 2x·cos(x²) + 1/x",
          hint: "This is our final answer, representing the rate of change of the original function."
        }
      ];
    }
    else {
      // Default case - quadratic equation
      return [
        { 
          title: "Identify the standard form", 
          content: "The quadratic equation 2x² + 3x - 5 = 0 is in the form ax² + bx + c = 0, where a=2, b=3, and c=-5",
          hint: "Make sure the equation is set equal to zero before identifying coefficients."
        },
        { 
          title: "Apply the quadratic formula", 
          content: "x = (-b ± √(b² - 4ac)) / (2a)\nx = (-3 ± √(3² - 4·2·(-5))) / (2·2)\nx = (-3 ± √(9 + 40)) / 4\nx = (-3 ± √49) / 4\nx = (-3 ± 7) / 4",
          hint: "The discriminant b² - 4ac determines the number of real solutions."
        },
        { 
          title: "Calculate the two solutions", 
          content: "x₁ = (-3 + 7) / 4 = 4/4 = 1\nx₂ = (-3 - 7) / 4 = -10/4 = -2.5",
          hint: "Always check your solutions by substituting back into the original equation."
        },
        { 
          title: "Verify the solutions", 
          content: "For x = 1: 2(1)² + 3(1) - 5 = 2 + 3 - 5 = 0 ✓\nFor x = -2.5: 2(-2.5)² + 3(-2.5) - 5 = 2(6.25) - 7.5 - 5 = 12.5 - 7.5 - 5 = 0 ✓",
          hint: "Both solutions satisfy the original equation, confirming our answer."
        }
      ];
    }
  }, [problem]);

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-700 mb-6">
        Follow along with the step-by-step solution process:
      </div>
      
      {steps.map((step, index) => (
        <Card key={index} className="p-4 border hover:shadow-md transition-shadow">
          <div className="flex items-start mb-2">
            <Badge className="mr-2 bg-brand-blue h-6 w-6 rounded-full flex items-center justify-center p-0">
              {index + 1}
            </Badge>
            <h3 className="font-medium">{step.title}</h3>
          </div>
          <div className="pl-8">
            <p className="whitespace-pre-wrap text-gray-700 mb-3">{step.content}</p>
            <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm text-amber-800">
              <strong>💡 Tip:</strong> {step.hint}
            </div>
          </div>
        </Card>
      ))}
      
      <div className="mt-6 text-sm text-gray-600 flex items-center">
        <span className="mr-2">⭐</span>
        <span>Understanding each step helps build problem-solving skills for similar questions.</span>
      </div>
    </div>
  );
};

export default StepByStepGuide;
