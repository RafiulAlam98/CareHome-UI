import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../Layout/Main";
import FeatureDetails from "../pages/FeatureDetails/FeatureDetails";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <FeatureDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
