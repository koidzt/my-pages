import React, { useContext, useState } from 'react';
import { sidebarMenu } from '../../configuration/menu.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import SessionStorageService from '../../services/sessionStorage.service';
import LocalStorageService from '../../services/localStorage.service';
import { useNavigate } from 'react-router-dom';
import { ConfigWebContext } from '../../App';

function Theme({ title = '', className = '', children }) {
  const navigate = useNavigate();
  const { sidebar, setSidebar, theme, setTheme } = useContext(ConfigWebContext);

  const onClickBurgerMenu = () => {
    if (sidebar === 'show') {
      setSidebar('hide');
      LocalStorageService.setSidebar('hide');
    } else {
      setSidebar('show');
      LocalStorageService.setSidebar('show');
    }
  };

  const onClickTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      SessionStorageService.setTheme('light');
    } else {
      setTheme('dark');
      SessionStorageService.setTheme('dark');
    }

    // switch (theme) {
    //   case 'light':
    //     setTheme('light');
    //     SessionStorageService.setTheme('light');

    //     break;
    //   case 'sepia':
    //     setTheme('sepia');
    //     SessionStorageService.setTheme('sepia');

    //     break;
    //   case 'dark':
    //     setTheme('dark');
    //     SessionStorageService.setTheme('dark');

    //     break;
    //   default:
    //     setTheme('light');
    //     SessionStorageService.setTheme('light');
    //     break;
    // }
  };

  const onClickHome = () => {
    navigate('/home');
  };

  return (
    <div className="text-light bg-dark theme-box">
      <div className="header-bar bg-secondary">
        <button className="btn btn-second my-0 mx-2" onClick={onClickBurgerMenu}>
          <FontAwesomeIcon className="text-light" icon={faBars} />
        </button>
        <h3>{title}</h3>
        <div>
          {/* <button className="btn btn-second my-0 mx-2" onClick={onClickTheme}>
            <FontAwesomeIcon className="text-light" icon={theme === 'dark' ? faSun : faMoon} />
          </button> */}
          <button className="btn btn-second my-0 mx-2" onClick={onClickHome}>
            <FontAwesomeIcon className="text-light" icon={faHome} />
          </button>
        </div>
      </div>

      {sidebar === 'show' && (
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
