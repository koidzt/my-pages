import React, { useState } from 'react';
import Theme from '../../../assets/theme/Theme';

function TodoList() {
  const [enterTodo, setEnterTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [showEditSub, setShowEditSub] = useState({ status: false, indexTitle: '', indexSub: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodoList([...todoList, { title: enterTodo, subtitle: [] }]);
    setEnterTodo('');
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((item, idx) => idx !== index);

    setTodoList(newTodoList);
  };

  const handleAddSubtitle = (index) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      subtitle: idx === index ? [...item.subtitle, { title: '', edit: true }] : [...item.subtitle],
    }));

    setTodoList(newTodoList);
  };

  const handleDeleteSub = (indexTitle, indexSub) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      subtitle: idx === indexTitle ? item.subtitle.filter((sub, i) => i !== indexSub) : [...item.subtitle],
    }));

    setTodoList(newTodoList);
  };

  const handleEditSubtitle = (indexTitle, indexSub) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      subtitle:
        idx === indexTitle
          ? item.subtitle.map((sub, i) => ({ ...sub, edit: i === indexSub ? !sub.edit : sub.edit }))
          : [...item.subtitle],
    }));

    setTodoList(newTodoList);
  };
  const handleChangeSubtitle = (event, indexTitle, indexSub) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      subtitle:
        idx === indexTitle
          ? item.subtitle.map((sub, i) => ({ ...sub, title: i === indexSub ? event.target.value : sub.title }))
          : [...item.subtitle],
    }));

    setTodoList(newTodoList);
  };

  return (
    <Theme title="To Do List">
      <div className="container d-flex flex-column align-items-center mt-3">
        <div className="row w-100">
          <div className="col text-center">
            <form className="w-100" onSubmit={handleSubmit}>
              <input
                className="form-control bg-dark text-light"
                type={'text'}
                value={enterTodo}
                onChange={(e) => setEnterTodo(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="row w-100 mt-3">
          <div className="col text-center">
            {todoList.map((item, idx) => (
              <div className="row justify-content-end align-items-center" key={`title-${idx + 1}`}>
                <div className="col-auto text-end">
                  <h5 className="mb-0">{idx + 1} :</h5>
                </div>
                <div className="col d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">{item.title}</h5>
                  <div className="d-flex">
                    <button className="btn text-light btn-primary mx-2" onClick={() => handleAddSubtitle(idx)}>
                      +
                    </button>
                    <button className="btn text-light btn-danger" onClick={() => handleDelete(idx)}>
                      X
                    </button>
                  </div>
                </div>
                {item.subtitle.length > 0 &&
                  item.subtitle.map((sub, i) => (
                    <div
                      className={`row align-items-center my-1 ${i === 0 ? 'mt-2' : ''}`}
                      key={`sub-${idx + 1}-${i + 1}`}
                    >
                      <div className="col-auto text-end">
                        <h5 className="mb-0">
                          {idx + 1}.{i + 1} :
                        </h5>
                      </div>
                      <div className="col d-flex align-items-center justify-content-between">
                        {sub.edit ? (
                          <input
                            className="w-100 text-light bg-dark border border-secondary rounded"
                            type={'text'}
                            value={sub.title}
                            onChange={(e) => handleChangeSubtitle(e, idx, i)}
                          />
                        ) : (
                          <h5 className="mb-0">{sub.title}</h5>
                        )}

                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-outline-primary mx-2 my-0"
                            onClick={() => handleEditSubtitle(idx, i)}
                          >
                            ...
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger my-0"
                            onClick={() => handleDeleteSub(idx, i)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default TodoList;
