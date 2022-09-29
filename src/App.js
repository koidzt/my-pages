import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { sidebarMenu } from './configuration/menu.config';
import Demo from './views/demo/Demo';
import Resume from './views/pages/resume/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/resume'} element={<Resume />} />
        <Route exact path={'/demo'} element={<Demo />} />
        {sidebarMenu.map(({ name, path, component: PageComponent }) => (
          <Route key={`route-${name}`} exact path={path} element={<PageComponent />} />
        ))}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
