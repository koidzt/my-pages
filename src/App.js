import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/pages/home/Home';
import Demo from './views/demo/Demo';
import Counter from './views/pages/counter/Counter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/demo'} element={<Demo />} />
        <Route exact path={'/home'} element={<Home />} />
        <Route exact path={'/counter'} element={<Counter />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
