import Counter from '../views/pages/counter/Counter';
import Home from '../views/pages/home/Home';
import Sudoku from '../views/pages/sudoku/Sudoku';

class Menu {
  constructor(name, path, component, titleEn, titleTh) {
    this.name = name;
    this.path = path;
    this.component = component;
    this.titleEn = titleEn;
    this.titleTh = titleTh;
  }
}

export const sidebarMenu = [
  new Menu('Home', '/home', Home, 'Home', 'หน้าแรก'),
  new Menu('Counter', 'counter', Counter, 'Counter', 'นับเลข'),
  new Menu('Sudoku', 'sudoku', Sudoku, 'Sudoku', 'ซูโดกุ'),
];
