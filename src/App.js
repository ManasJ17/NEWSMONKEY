import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () =>{
  
  
    return (
      <Router>
        <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/sports'   element={<News country="us" category="sports"/>}></Route>
          <Route path='/business'   element={<News country="us" category="business"/>}></Route>
          <Route path="/entertainment" element={<News country="us" category="entertainment" />} />
          <Route path="/general" element={<News country="us" category="general" />} />
          <Route path="/health" element={<News country="us" category="health" />} />
          <Route path="/science" element={<News country="us" category="science" />} />
          <Route path="/sports" element={<News country="us" category="sports" />} />
          <Route path="/technology" element={<News country="us" category="technology" />} />

        </Routes>
        {/* <News country='us' category='Science'/> */}
      </div>
      </Router>
      
    )
  
}
export default App;