import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../Layout/Main";
import FeatureDetails from "../pages/FeatureDetails/FeatureDetails";
import Websites from "../pages/Websites/Websites";
import About from "../pages/About/About";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashboardMain from "../Layout/DashboardMain";
import AddReview from "../components/Reviews/AddReview";
import AddFeature from "../pages/Dashboard/AddFeature/AddFeature";
import AddNewsEvent from "../pages/Dashboard/AddNewsEvent/AddNewsEvent";
import AddAwards from "../pages/Dashboard/AddAwards/AddAwards";
import FeatureLists from "../pages/Dashboard/FeatureLists/FeatureLists";
import UserList from "../pages/Dashboard/UserList/UserList";
import PrivateRoute from "./PrivateRoutes";
import TourInformation from "../components/BookATour/TourInformation";
import TourLists from "../pages/Dashboard/TourLists/TourLists";

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
      // {
      //   path: "/jobs",
      //   element: <Jobs />,
      // },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reviews/:id",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/tour",
        element: (
          <PrivateRoute>
            <TourInformation />
          </PrivateRoute>
        ),
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardMain />
      </PrivateRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <AddFeature />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/feature-list",
        element: (
          <PrivateRoute>
            <FeatureLists />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user-list",
        element: (
          <PrivateRoute>
            <UserList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/news-event/:id",
        element: (
          <PrivateRoute>
            <AddNewsEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/award/:id",
        element: (
          <PrivateRoute>
            <AddAwards />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tour-list",
        element: (
          <PrivateRoute>
            <TourLists />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routes;
