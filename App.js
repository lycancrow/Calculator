import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Splash from './view/Splash';
import CalculatorView from './view/CalculatorView';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular un tiempo de carga (por ejemplo, 2 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpiar el temporizador en caso de que el componente se desmonte antes de que termine el tiempo de carga
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Splash /> : <CalculatorView />;
}
