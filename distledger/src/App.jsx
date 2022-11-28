import React from 'react';
import "./app.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinDatabase from './components/joinDatabase/JoinDatabase';
import FormDatabase from './components/formDatabase/FormDatabase';
import Header from './components/header/Header';
import TransactionPage from './components/TransactionPage/TransactionPage';
import Dashboard from './components/Dashboard/pages/home/Home';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/Join' element={<JoinDatabase />} />
        <Route path='/Login' element={<FormDatabase />} />
        <Route path= '/TransactionPage' element={<TransactionPage/>} />
        <Route path= '/Dashboard' element={<Dashboard/>} />
        <Route path='/test' element = {<Dashboard/>} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;