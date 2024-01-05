import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Register/Login";
import Details from "../Components/Details/Details";
import Category from "../Components/Category/Category";
import Favorites from "../Components/Favorites/Favorites";
import Profile from "../Components/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/details',
          element: <Details />
        },
        {
          path: '/category',
          element: <Category />
        },
        {
          path: '/favorites',
          element: <Favorites />
        },
        {
          path: '/register',
          element: <Login />
        },
        {
          path: '/profile',
          element: <Profile />
        }
      ]
    },
  ]);

export default router;
  