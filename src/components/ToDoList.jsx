import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  todoFailure,
  todoRequest,
  todoSuccess,
  toggleTask
} from "../redux/app/action";

export function ToDoList() {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector((state) => state.app);

  const gettoDos = () => {
    const request = todoRequest();
    dispatch(request);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        const success = todoSuccess(res);
        dispatch(success);
      })
      .catch(() => {
        const error = todoFailure();
        dispatch(error);
      });
  };

  useEffect(() => {
    gettoDos();
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };
  // console.log(todos);

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            {`${item.title} - ${item.status}`}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleToggle(item.id)}>Toggle</button>
          </div>
        );
      })}
    </div>
  );
}
