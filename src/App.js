import { useDispatch, useSelector } from "react-redux";
import { Login } from "./components/Login";
import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";
import { loginSuccess } from "./redux/auth/action";
import "./styles.css";

export default function App() {
  const { isAuth, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogin = () => {
    const action = loginSuccess(Date.now());

    dispatch(action);
  };

  if (!isAuth) {
    return <Login handleClick={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <h3>Token is {token}</h3>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}
