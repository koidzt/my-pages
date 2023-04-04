import React from 'react';
import Theme from '../../../assets/theme/Theme';
import { sidebarMenu } from '../../../configuration/menu.config';
import '../../../styles/views/pages/home/home.css';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  const handleClickMenu = (path) => () => {
    navigate(path);
  };

  return (
    <Theme title="Home">
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center">
          {sidebarMenu.map((item, idx) => {
            if (idx !== 0) {
              let colorButton = '';
              const randomNum = (Math.random().toLocaleString('en', { maximumFractionDigits: 1 }) * 10) % 4;
              switch (idx % 4) {
                case 1:
                  colorButton = 'color-one';
                  break;
                case 2:
                  colorButton = 'color-two';
                  break;
                case 3:
                  colorButton = 'color-three';
                  break;

                default:
                  colorButton = 'color-four';
                  break;
              }

              return (
                <div className="col-auto text-center" key={`button-to-${item.name}`}>
                  <button className={`button-menu ${colorButton}`} onClick={handleClickMenu(item.path)}>
                    {item.titleEn}
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Theme>
  );
}

export default Home;
