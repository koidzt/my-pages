import React, { useState } from 'react';
import Theme from '../../../assets/theme/Theme';

function TodoList() {
  const [enterTodo, setEnterTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmitNewTodo = (event) => {
    event.preventDefault();

    setTodoList([...todoList, { title: enterTodo, edit: false, subtitle: [] }]);
    setEnterTodo('');
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((item, idx) => idx !== index);

    setTodoList(newTodoList);
  };

  const handleSubmitTitle = (event, indexTitle) => {
    event.preventDefault();

    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      edit: idx === indexTitle ? !item.edit : item.edit,
    }));

    setTodoList(newTodoList);
  };

  const handleChangeTitle = (event, indexTitle) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      title: idx === indexTitle ? event.target.value : item.title,
    }));

    setTodoList(newTodoList);
  };

  const handleEditTitle = (indexTitle) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      edit: idx === indexTitle ? !item.edit : item.edit,
    }));

    setTodoList(newTodoList);
  };

  const handleAddSubtitle = (index) => {
    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      subtitle: idx === index ? [...item.subtitle, { title: '', edit: true }] : [...item.subtitle],
    }));

    setTodoList(newTodoList);
  };
  const handleSubmitNewTask = (event, indexTitle, indexSub) => {
    event.preventDefault();

    const newTodoList = todoList.map((item, idx) => ({
      ...item,
      subtitle:
        idx === indexTitle
          ? item.subtitle.map((sub, i) => ({ ...sub, edit: i === indexSub ? !sub.edit : sub.edit }))
          : [...item.subtitle],
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
        <div className="row w-100 justify-content-center">
          <div className="col-sm-12 col-md-10 d-flex align-items-center justify-content-between">
            <form className="w-100" onSubmit={handleSubmitNewTodo}>
              <input
                className="form-control bg-dark text-light"
                type={'text'}
                value={enterTodo}
                onChange={(e) => setEnterTodo(e.target.value)}
              />
            </form>

            <button className="btn text-light btn-primary ms-2 text-nowrap" onClick={handleSubmitNewTodo}>
              Add Task
            </button>
          </div>
        </div>

        <div className="row w-100 mt-3 justify-content-center">
          <div className="col-sm-12 col-md-10 text-center">
            {todoList.map((item, idx) => (
              <div className="row justify-content-end align-items-center my-1" key={`title-${idx + 1}`}>
                <div className="col-auto text-end">
                  <h5 className="mb-0">{idx + 1} :</h5>
                </div>
                <div
                  className="col d-flex align-items-center justify-content-between"
                  onDoubleClick={() => handleEditTitle(idx)}
                >
                  {item.edit ? (
                    <React.Fragment>
                      <form className="w-100" onSubmit={(e) => handleSubmitTitle(e, idx)}>
                        <input
                          className="w-100 text-light bg-dark border border-secondary rounded"
                          type={'text'}
                          value={item.title}
                          onChange={(e) => handleChangeTitle(e, idx)}
                        />
                      </form>

                      <div className="d-flex">
                        <button className="btn text-light btn-primary mx-2" onClick={() => handleEditTitle(idx)}>
                          Save
                        </button>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <h5 className="mb-0">{item.title}</h5>

                      <div className="d-flex">
                        <button className="btn text-light btn-primary mx-2" onClick={() => handleAddSubtitle(idx)}>
                          Add
                        </button>
                        <button className="btn text-light btn-danger" onClick={() => handleDelete(idx)}>
                          Delete
                        </button>
                      </div>
                    </React.Fragment>
                  )}
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
                          <form className="w-100" onSubmit={(e) => handleSubmitNewTask(e, idx, i)}>
                            <input
                              className="w-100 text-light bg-dark border border-secondary rounded"
                              type={'text'}
                              value={sub.title}
                              onChange={(e) => handleChangeSubtitle(e, idx, i)}
                            />
                          </form>
                        ) : (
                          <h5 className="mb-0">{sub.title}</h5>
                        )}

                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-outline-primary mx-2 my-0"
                            onClick={() => handleEditSubtitle(idx, i)}
                          >
                            {!sub.edit ? `Edit` : `Save`}
                          </button>
                          {!sub.edit && (
                            <button
                              className="btn btn-sm btn-outline-danger my-0"
                              onClick={() => handleDeleteSub(idx, i)}
                            >
                              Delete
                            </button>
                          )}
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
