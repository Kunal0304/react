import React, {useState} from 'react';
import shortid from 'shortid';


const Todo = () => {
  const [todo, setTodo] = useState('');
  const [input, setInput] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(null);
  // console.log(input,"ttttt")
  const addTodo = () => {
    if(todo && toggle) {
      setInput(
        input.map((elem) => {
          if (elem.id === edit) {
            return { ...elem, text: todo };
          }
          return elem;
        })
      );

      setToggle(false);
      setEdit(null);
      setTodo('');
    } else {
      setInput([...input, { id: shortid.generate(), text: todo }]);
      console.log(input);
      setTodo('');
    }
  };

  const handleDeleteClick = (id) => {
    const removeItem = input.filter((todo) => {
      return todo.id !== id;
    });
    setInput(removeItem);
    setTodo("")
    setToggle(false)
  };

  const editTodo = (id) => {
    const editItem = input.find((item) => {
      return item.id === id;
    });

    setToggle(true);
    setTodo(editItem.text);
    setEdit(id);
    console.log(editItem);

  };

  const handleKeypress = (e) => {

    if (e.key === "Enter") {

      addTodo()
    }

  }

  return (
    <div>

      <div className="card  maincard shadow ">
        <div className="card-header   fw-bold">
          <h4>
           TO DO LIST
          </h4>
        </div>
        <div className="card-body">
          <input
            type="text"
            placeholder="Enter Your Text Here"
            className="form-control"
            name="input"
            value={todo}
            onKeyPress={handleKeypress}
            onChange={(e) => setTodo(e.target.value)}
          />
          {toggle ? (
            <button
              className="btn btn-dark form-control mt-3 addbutton"
              onClick={addTodo}
            >
              Edit To Do
            </button>
          ) : (
            <button
              className="btn btn-warning form-control mt-3 addbutton"
              onClick={addTodo}
            >
              Add To Do
            </button>
          )}

          <hr />

          {input.map((item, index) => {
            return (
              <div className="todolist mt-3" key={index}>
                <table>
                  <tbody>
                    <tr>
                      <td className="text-white fs-5" style={{ width: '10px' }}>
                        {index + 1}.
                      </td>
                      <td
                        className="text-white fs-5"
                        style={{ width: '300px' }}
                      >
                        {item.text}
                      </td>
                      <td>
                        <button onClick={() => {
                            editTodo(item.id);
                          }}>Edit</button>
                      </td>

                      <td>
                          <button onClick={() => {
                            handleDeleteClick(item.id);
                          }}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
export default Todo;
