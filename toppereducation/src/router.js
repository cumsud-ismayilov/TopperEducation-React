import { v4 as uuidv4 } from "uuid";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import PageOne from "./pages/PageOne/PageOne";
import AboutUs from "./pages/AboutUs/AboutUs";
import Gallery from "./pages/Gallery/Gallery";
import Trems from "./pages/Trems/Trems";
import Faq from "./pages/FAQ/Faq";
import Pravicy from "./pages/Pravicy/Pravicy";
import CourseOne from "./pages/CourseOne/Course";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
const routes = [
  {
    id: uuidv4(),
    name: "Home",
    element: <Home />,
    path: "/",
  },
  {
    id: uuidv4(),
    name: "Page",
    element: <PageOne />,
    path: "/pageone",
  },
  {
    id: uuidv4(),
    name: "Courses",
    element: <Courses />,
    path: "/courses",
  },
  {
    id: uuidv4(),
    name: "Contact",
    element: <Contact />,
    path: "/contact",
  },
  {
    id: uuidv4(),
    name: "Blog",
    element: <Blog />,
    path: "/blog",
  },
  {
    id: uuidv4(),
    name: "Events",
    element: <Events />,
    path: "/events",
  },
  {
    id: uuidv4(),
    name: "AboutUs",
    element: <AboutUs />,
    path: "/aboutus",
  },
  {
    id: uuidv4(),
    name: "Gallery",
    element: <Gallery />,
    path: "/gallery",
  },
  {
    id: uuidv4(),
    name: "Faq",
    element: <Faq />,
    path: "/faq",
  },
  {
    id: uuidv4(),
    name: "Trems",
    element: <Trems />,
    path: "/trems",
  },
  {
    id: uuidv4(),
    name: "Pravicy",
    element: <Pravicy />,
    path: "/pravicy",
  },
  {
    id: uuidv4(),
    name: "CourseOne",
    element: <CourseOne />,
    path: "/courseone",
  },
  {
    id: uuidv4(),
    name: "SingleCourse",
    element: <SingleCourse />,
    path: "/singlecourse",
  },
];
export default routes;
