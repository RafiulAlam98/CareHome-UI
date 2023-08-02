import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../Layout/Main";
import FeatureDetails from "../pages/FeatureDetails/FeatureDetails";
import Websites from "../pages/Websites/Websites";
import Jobs from "../pages/Jobs/Jobs";
import About from "../pages/About/About";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashboardMain from "../Layout/DashboardMain";
import AddFeature from "../pages/Dashboard/AddFeature/AddFeature";

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
      {
        path: "/website",
        element: <Websites />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardMain />,
    children: [
      {
        path: "/dashboard",
        element: <AddFeature />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
