import React from 'react';
import "./app.scss"

import JoinDatabase from './components/joinDatabase/JoinDatabase';
import FormDatabase from './components/formDatabase/FormDatabase';
import Header from './components/header/Header';
import TransactionPage from './components/TransactionPage/TransactionPage';

function App() {
  return (
    <div className="app">
      <div className="section">
        <Header/>
        <JoinDatabase/>
        <FormDatabase/>
        <TransactionPage/>
      </div>
    </div>
  );
}

export default App;