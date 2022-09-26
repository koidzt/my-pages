import React, { Component } from 'react';
import '../../../styles/views/pages/sudoku/sudoku.css';
import Theme from '../../../assets/theme/Theme';
import Board from './Board';

export default class Sudoku extends Component {
  render() {
    return (
      <Theme title="Sudoku">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-8 col-xxl-6 ">
              <Board></Board>
            </div>
          </div>
        </div>
      </Theme>
    );
  }
}
