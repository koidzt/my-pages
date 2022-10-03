import React from 'react';
import Theme from '../../../assets/theme/Theme';
import General from './General';
import '../../../styles/views/pages/aboutMe/aboutMe.css';

function AboutMe() {
  return (
    <Theme title="About Me">
      <div class="carrousel">
        <input type="radio" name="slides" id="radio-1" checked />
        <input type="radio" name="slides" id="radio-2" />
        <input type="radio" name="slides" id="radio-3" />
        <ul class="slides">
          <li class="slide">
            <General />
          </li>
          <li class="slide"></li>
          <li class="slide"></li>
        </ul>
        <div class="slidesNavigation">
          <label for="radio-1" id="dotForRadio-1"></label>
          <label for="radio-2" id="dotForRadio-2"></label>
          <label for="radio-3" id="dotForRadio-3"></label>
        </div>
      </div>
    </Theme>
  );
}

export default AboutMe;
