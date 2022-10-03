import AboutMe from '../views/pages/aboutMe/AboutMe';
import Counter from '../views/pages/counter/Counter';
import Sudoku from '../views/pages/sudoku/Sudoku';
import TodoList from '../views/pages/todolist/TodoList';

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
  new Menu('AboutMe', '/aboutme', AboutMe, 'About Me', 'เกี่ยวกับฉัน'),
  new Menu('Counter', 'counter', Counter, 'Counter', 'นับเลข'),
  new Menu('Sudoku', 'sudoku', Sudoku, 'Sudoku', 'ซูโดกุ'),
  new Menu('TodoList', 'todolist', TodoList, 'Todo List', 'รายการที่ต้องทำ'),
];
