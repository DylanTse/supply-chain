import React from 'react';
import "./app.css"

import JoinDatabase from './components/joinDatabase/JoinDatabase';
import FormDatabase from './components/formDatabase/FormDatabase';

function App() {
  return (
    <div className="app">
      <div className="section">
        <JoinDatabase/>
        <FormDatabase/>
      </div>
    </div>
  );
}

export default App;
