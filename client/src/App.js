import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Pays from './Pays'

function App() {

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <BrowserRouter>
        {/*<Header />*/}
        <Routes>
          <Route exact path="/" element={<Navigate to="/pays" />} />
          <Route path="/pays" element={<Pays />} />
        </Routes>
        {/*<Footer />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
