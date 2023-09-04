import { v4 as uuidv4 } from "uuid";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import PageOne from "./pages/PageOne/PageOne";

const routes = [
  {
    id: uuidv4(),
    name: "Home",
    element: <Home/>,
    path: "/",
  },
  {
    id: uuidv4(),
    name: "Page",
    element: <PageOne/>,
    path: "/pageone",
  },
  {
    id: uuidv4(),
    name: "Courses",
    element: <Courses/>,
    path: "/courses",
  },
  {
    id: uuidv4(),
    name: "Contact",
    element: <Contact/>,
    path: "/contact",
  },
  {
    id: uuidv4(),
    name: "Blog",
    element: <Blog/>,
    path: "/blog",
  },
  {
    id: uuidv4(),
    name: "Events",
    element: <Events/>,
    path: "/events",
  },
];
export default routes ;