import React, { Component } from 'react';
import '../../../styles/views/pages/sudoku/sudoku.css';
import Theme from '../../../assets/theme/Theme';
import Board from './Board';

export default class Sudoku extends Component {
  render() {
    return (
      <Theme>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div style={{ width: 600, height: 500 }}>
            <Board></Board>
          </div>
        </div>
      </Theme>
    );
  }
}
