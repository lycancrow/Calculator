// CalculatorViewModel.js

import { useState } from 'react';


export const useCalculatorViewModel = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonPress = (value) => {
    if (value === 'AC') {
      setDisplayText('');
    } else if (value === 'DEL') {
      setDisplayText(displayText.slice(0, -1));
    } else if (value === '=') {
      try {
        let expression = displayText;
        
        expression = expression.replace('√', 'Math.sqrt(');
        expression = expression.replace('π', '3.14159265');
        expression = expression.replace('÷', '/');
        expression = expression.replace(/(\d+)exp(\d+)/g, 'Math.pow($1, $2)');
        expression = expression.replace(/(\d+)!/g, (_, num) => {
            const factorialResult = factorial(parseInt(num));
            return factorialResult.toString();
          });
          

        if (expression.includes('Math.sqrt(')) {
            expression += ')';
        }

        const result = eval(expression);
        setDisplayText(result.toString());
      } catch (error) {
        setDisplayText('Error');
      }
    } else {
      setDisplayText(displayText + value);
    }
  };

  return {
    displayText,
    handleButtonPress,
  };
};
