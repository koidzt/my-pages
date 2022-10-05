import React from 'react';
import Theme from '../../../assets/theme/Theme';
import { sidebarMenu } from '../../../configuration/menu.config';
import '../../../styles/views/pages/home/home.css';

function Home() {
  return (
    <Theme>
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center">
          {sidebarMenu.map((item, idx) => {
            if (idx !== 0) {
              let colorButton = '';
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
                <div className="col-auto text-center">
                  <button
                    className={`button-menu ${colorButton}`}
                    key={`button-to-${item.name}`}
                    onClick={() => window.location.assign(item.path)}
                  >
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
