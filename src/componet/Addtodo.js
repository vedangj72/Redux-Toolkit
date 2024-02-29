import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

export default function Addtodo() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const handletodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setinput("");
  };
  return (
    <div className=" container ">
      <form onSubmit={handletodo}>
        <input
          type="text"
          placeholder="Enter Todo...."
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button className=" btn btn-primary" onClick={handletodo}>
          Submit
        </button>
        {/* {console.log({ input })} */}
      </form>
    </div>
  );
}
