import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LocalStorageService from '../../services/localStorage.service';
import { sidebarMenu } from '../../configuration/menu.config';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

function Theme({ title = '', className = '', children }) {
  const [showSidebar, setShowSidebar] = useState(LocalStorageService.getSidebar());

  const onClickBurgerMenu = () => {
    if (showSidebar === 'hide') {
      setShowSidebar('show');
      LocalStorageService.setSidebar('show');
    } else {
      setShowSidebar('hide');
      LocalStorageService.setSidebar('hide');
    }
  };
  const onClickDocument = () => {};

  return (
    <div className="vh-100 text-light">
      <div className="h-100">
        <div className="header-bar bg-secondary position-absolute w-100 d-flex justify-content-between align-items-center">
          <button className="btn btn-second my-0 mx-2" onClick={onClickBurgerMenu}>
            <FontAwesomeIcon className="text-light" icon={faBars} />
          </button>

          <h3>{title}</h3>

          <button className="btn btn-second my-0 mx-2" onClick={onClickDocument}>
            <FontAwesomeIcon className="text-light" icon={faFileLines} />
          </button>
        </div>

        {showSidebar === 'show' && (
          <div className="sidebar  bg-secondary">
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
        <div className="body-page bg-dark container-fluid overflow-auto">
          <div className={`w-100 h-100 ${className}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
