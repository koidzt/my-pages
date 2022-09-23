import React, { Component } from 'react';
import '../../../styles/views/pages/sudoku/sudoku.css';
import Theme from '../../../assets/theme/Theme';
import Board from './Board';

export default class Sudoku extends Component {
  render() {
    return (
      <Theme title="Sudoku">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Board></Board>
        </div>
      </Theme>
    );
  }
}
