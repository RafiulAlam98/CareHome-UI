import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../Layout/Main";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
