import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Splash from './view/Splash'
import CalculatorView from './view/CalculatorView'
import { boolean } from 'yargs';

export default function App() {

  //const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return  <Splash/>

  //return isLoading ? <Splash setIsLoading = {setIsLoading}/> : <CalculatorView/>;
}
