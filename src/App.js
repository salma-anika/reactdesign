import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import SignUp from './SignUp';
import logo from './logo.svg';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
