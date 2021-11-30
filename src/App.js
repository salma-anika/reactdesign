import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import About from './About';

import SignUp from './SignUp';
import logo from './logo.svg';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      <About/>
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
