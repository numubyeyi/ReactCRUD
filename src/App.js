
import React, { } from 'react';

import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Search from './components/Search';;





function App() {

 
 
  

  
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/search" element={<Search />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
