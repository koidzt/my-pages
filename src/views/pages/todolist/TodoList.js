import React, { useState } from 'react';
import Theme from '../../../assets/theme/Theme';

function TodoList() {
  const [enterTodo, setEnterTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodoList([...todoList, enterTodo]);
    setEnterTodo('');
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((item, idx) => idx !== index);

    setTodoList(newTodoList);
  };

  return (
    <Theme title="To Do List">
      <div className="container d-flex flex-column align-items-center mt-3">
        <div className="row w-50">
          <div className="col-12 text-center">
            <form onSubmit={handleSubmit}>
              <input
                className="w-100 form-control bg-dark text-light"
                type={'text'}
                value={enterTodo}
                onChange={(e) => setEnterTodo(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="row w-50">
          <div className="col text-center">
            {todoList.map((item, idx) => (
              <div className="row align-items-center">
                <div className="col-1 text-end">
                  <h5 className="mb-0">{idx + 1} :</h5>
                </div>
                <div className="col-11 d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">{item}</h5>
                  <button className="btn text-light bg-danger" onClick={() => handleDelete(idx)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default TodoList;
