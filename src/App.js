import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { sidebarMenu } from './configuration/menu.config';
import sessionStorageService from './services/sessionStorage.service';
import localStorageService from './services/localStorage.service';
import Demo from './views/demo/Demo';

export const ConfigWebContext = createContext();

function App() {
  const curTheme = sessionStorageService.getTheme() ? sessionStorageService.getTheme() : 'dark';
  const curSidebar = localStorageService.getSidebar() ? localStorageService.getSidebar() : 'show';

  const [theme, setTheme] = useState(curTheme);
  const [sidebar, setSidebar] = useState(curSidebar);

  return (
    <ConfigWebContext.Provider value={{ theme, setTheme, sidebar, setSidebar }}>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/demo'} element={<Demo />} />
          {sidebarMenu.map(({ name, path, component: PageComponent }) => (
            <Route key={`route-${name}`} exact path={path} element={<PageComponent />} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </ConfigWebContext.Provider>
  );
}

export default App;
