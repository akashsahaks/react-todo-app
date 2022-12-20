import { useState } from "react";

const AddTodo = (props) => {
  const [value, setValue] = useState("");

  const onSubmit = function (event) {
    event.preventDefault();
    props.addtodo(value);
    setValue("");
  };

  const inputOnChange = function (event) {
    setValue(event.target.value);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 ">
          <input
            type="text"
            placeholder="Add your todo here"
            value={value}
            onChange={inputOnChange}
            className="form-control rounded-pill"
          />
          <div className="input-group-append p-1">
            <button type="submit" className="btn btn-success">
              Add New todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
