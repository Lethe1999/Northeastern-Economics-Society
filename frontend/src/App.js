import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home';
import BostonSymposium from '../src/Components/BostonSymposium';
import UpcomingEvents from '../src/Components/UpcomingEvents';
import PastEvents from '../src/Components/PastEvents';
import NewsLetter from '../src/Components/NewsLetter';
import EconPress from '../src/Components/EconPress';
import Fed from '../src/Components/Fed';
import Eboard from '../src/Components/Eboard';
import Login from '../src/Components/Login';
import Register from '../src/Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boston-symposium' element={<BostonSymposium />} />
        <Route path='/upcoming-events' element={<UpcomingEvents />} />
        <Route path='/past-events' element={<PastEvents />} />
        <Route path='/news-letter' element={<NewsLetter />} />
        <Route path='/econ-press' element={<EconPress />} />
        <Route path='/fed' element={<Fed />} />
        <Route path='/eboard' element={<Eboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
