import { createBrowserRouter, Navigate } from "react-router-dom";
import Start from "../components/Start";
import End from "../components/End";
import Question from "../components/Question";
import AddQuestions from "../components/admin/AddQuestions";
import AdminHome from "../components/admin/adminHome";
import ListQuestions from "../components/admin/ListQuestions";
import EditQuestion from "../components/admin/editQuestion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/question" />,
  },
  {
    path: "/question",
    element: <Question />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/end",
    element: <End />,
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/admin/addQuestions",
    element: <AddQuestions />,
  },
  {
    path: "/admin/listQuestions",
    element: <ListQuestions />,
  },
  {
    path: "/admin/listQuestions/:id",
    element: <EditQuestion />,
  },
]);
