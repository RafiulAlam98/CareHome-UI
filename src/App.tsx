import { useDispatch } from "react-redux";
import "./App.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { setLoading, setUser } from "./redux/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const role = localStorage.getItem("user");
  const token = localStorage.getItem("accessToken");
  dispatch(setLoading(true));
  dispatch(setUser({ role, token }));
  dispatch(setLoading(false));
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
