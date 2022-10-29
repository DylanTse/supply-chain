import React from 'react';
import "./app.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinDatabase from './components/joinDatabase/JoinDatabase';
import FormDatabase from './components/formDatabase/FormDatabase';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<JoinDatabase />} />
        <Route path='/Login' element={<FormDatabase />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
