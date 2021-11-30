import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import About from './About';
import Shop from './Shop';
import View from './View';
import Clients from './Clients';

import SignUp from './SignUp';
import logo from './logo.svg';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      <About/>
      <Shop/>
      <View/>
      <Clients/>
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
