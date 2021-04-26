import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoute from './appRoute'
import {ContextOneProvider} from './contexts/appContext'
const App: React.FC <{}>=()=> {
  // const [count ,setCount]= React.useState<number>(0);
  return (
    <ContextOneProvider>
<AppRoute/>
    </ContextOneProvider>
  
  );
}

export default App;
