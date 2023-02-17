import logo from './logo.svg';
import './App.css';

import Home from "./Pages/Home"
import Experiences from './Pages/Experiences';
import Projects from "./Pages/Projects"
import Idle from './Pages/Idle';
import Error from './Pages/Error';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    window.onmessage = function(e) {
      if (e.data == "ShowProjects") {
        console.log("Displaying my projects...")
      }
    }
}, []); // force update

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Idle /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/experiences" element={ <Experiences /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </HashRouter>
    
  );
}

export default App;
