import About from '../pages/About/About';
import AddAwards from '../pages/Dashboard/AddAwards/AddAwards';
import AddCareTypes from '../pages/Dashboard/AddCareTypes/AddCareTypes';
import AddFeature from '../pages/Dashboard/AddFeature/AddFeature';
import AddNewsEvent from '../pages/Dashboard/AddNewsEvent/AddNewsEvent';
import AddReview from '../components/Reviews/AddReview';
import DashboardMain from '../Layout/DashboardMain';
import FeatureDetails from '../pages/FeatureDetails/FeatureDetails';
import FeatureLists from '../pages/Dashboard/FeatureLists/FeatureLists';
import HelpLine from '../pages/HelpLine/HelpLine';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Main from '../Layout/Main';
import NotFound from '../pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoutes';
import SignUp from '../pages/SignUp/SignUp';
import TourInformation from '../components/BookATour/TourInformation';
import TourLists from '../pages/Dashboard/TourLists/TourLists';
import UpdateFeature from '../pages/Dashboard/UpdateFeature/UpdateFeature';
import UserList from '../pages/Dashboard/UserList/UserList';
import Websites from '../pages/Websites/Websites';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:id',
        element: <FeatureDetails />,
      },
      {
        path: '/website',
        element: <Websites />,
      },
      // {
      //   path: "/jobs",
      //   element: <Jobs />,
      // },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/help_line',
        element: <HelpLine />,
      },
      {
        path: '/reviews/:id',
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: '/tour',
        element: (
          <PrivateRoute>
            <TourInformation />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardMain />
      </PrivateRoute>
    ),

    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <AddFeature />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/feature-list',
        element: (
          <PrivateRoute>
            <FeatureLists />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/user-list',
        element: (
          <PrivateRoute>
            <UserList />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/news-event/:id',
        element: (
          <PrivateRoute>
            <AddNewsEvent />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/care-types/:id',
        element: (
          <PrivateRoute>
            <AddCareTypes />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/update-feature/:id',
        element: (
          <PrivateRoute>
            <UpdateFeature />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/award/:id',
        element: (
          <PrivateRoute>
            <AddAwards />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/tour-list',
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
