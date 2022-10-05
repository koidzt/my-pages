import React, { useState } from 'react';
import { sidebarMenu } from '../../configuration/menu.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import LocalStorageService from '../../services/localStorage.service';
import SessionStorageService from '../../services/sessionStorage.service';

// export const defaultTheme = {
//  light:{},
//  dark:{
//   bgColor:,
//   color:,
//  }
// }

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

  const onClickHome = () => {
    window.location.assign('/home');
  };

  return (
    <div className="text-light bg-dark theme-box">
      <div className="header-bar bg-secondary">
        <button className="btn btn-second my-0 mx-2" onClick={onClickBurgerMenu}>
          <FontAwesomeIcon className="text-light" icon={faBars} />
        </button>
        <h3>{title}</h3>
        <div className="mx-3">
          {/* <button className="btn btn-second my-0 mx-2" onClick={onClickWebTheme}>
            <FontAwesomeIcon className="text-light" icon={webTheme === 'dark' ? faSun : faMoon} />
          </button> */}
          <button className="btn btn-second my-0 mx-2" onClick={onClickHome}>
            <FontAwesomeIcon className="text-light" icon={faHome} />
          </button>
        </div>
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
