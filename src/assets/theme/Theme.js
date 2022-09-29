import React, { useState } from 'react';
import { sidebarMenu } from '../../configuration/menu.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import LocalStorageService from '../../services/localStorage.service';
import SessionStorageService from '../../services/sessionStorage.servise';

function Theme({ title = '', className = '', children }) {
  const [showSidebar, setShowSidebar] = useState(LocalStorageService.getSidebar());
  const [webTheme, setWebTheme] = useState(SessionStorageService.getWebTheme());

  const onClickBurgerMenu = () => {
    if (showSidebar === 'hide') {
      setShowSidebar('show');
      LocalStorageService.setSidebar('show');
    } else {
      setShowSidebar('hide');
      LocalStorageService.setSidebar('hide');
    }
  };

  const onClickWebTheme = () => {
    if (webTheme === 'dark') {
      setWebTheme('light');
      SessionStorageService.setWebTheme('light');
    } else {
      setWebTheme('dark');
      SessionStorageService.setWebTheme('dark');
    }
  };

  return (
    <div className="text-light bg-dark theme-box">
      <div className="header-bar bg-secondary position-absolute w-100 d-flex justify-content-between align-items-center">
        <button className="btn btn-second my-0 mx-2" onClick={onClickBurgerMenu}>
          <FontAwesomeIcon className="text-light" icon={faBars} />
        </button>
        <h3>{title}</h3>
        {/* <button className="btn btn-second my-0 mx-2" onClick={onClickWebTheme}>
          <FontAwesomeIcon className="text-light" icon={webTheme === 'dark' ? faSun : faMoon} />
        </button> */}
        <div className="mx-3" style={{ width: '40px' }}></div>
      </div>

      {showSidebar === 'show' && (
        <div className="sidebar bg-secondary">
          <div className="title-sidebar">
            <h4 className="mx-2">Side Bar</h4>
            <button className="btn btn-second my-0 mx-2" onClick={onClickBurgerMenu}>
              <FontAwesomeIcon className="text-light" icon={faBars} />
            </button>
          </div>
          <ul className="navbar-nav px-4">
            {sidebarMenu.map((item) => (
              <li className="nav-item" key={`menu-${item.name}`}>
                <a className="nav-link " aria-current={item.name} href={item.path}>
                  {item.titleEn}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="body-page container-fluid">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

export default Theme;
