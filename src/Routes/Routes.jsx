import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Blog from "../Pages/Home/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Todos from "../Pages/Todos/Todos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: 'todos',
        element: <Todos></Todos>,
      }
    ],
  },
]);
