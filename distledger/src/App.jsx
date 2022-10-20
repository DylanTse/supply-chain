import React from 'react';
import "./app.scss"
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"

import JoinDatabase from './components/joinDatabase/JoinDatabase';
import FormDatabase from './components/formDatabase/FormDatabase';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="section">
          <Header/>
          <JoinDatabase/>
          <FormDatabase/>
        </div>
      </div>
    </Router>
  );
}

export default App;
