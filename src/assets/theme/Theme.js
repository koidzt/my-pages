import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LocalStorageService from '../../services/LocalStorageService';

function Theme({ children }) {
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

  return (
    <div className="container-fluid vh-100 text-light">
      <div className="row h-100">
        {showSidebar === 'hide' && (
          <div className="col-auto bg-secondary">
            <button className="btn btn-second mt-3" onClick={onClickBurgerMenu}>
              <FontAwesomeIcon className="text-light" icon={faBars} />
            </button>
          </div>
        )}

        {showSidebar === 'show' && (
          <div className="col-2 h-100 bg-secondary">
            <div className="d-flex justify-content-between align-items-center">
              <h4>Side Bar</h4>
              <button className="btn btn-second" onClick={onClickBurgerMenu}>
                <FontAwesomeIcon className="text-light" icon={faBars} />
              </button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="home" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " aria-current="counter" href="/counter">
                  Counter
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="col h-100 bg-dark p-3">{children}</div>
      </div>
    </div>
  );
}

export default Theme;
