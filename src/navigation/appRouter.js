import { createBrowserRouter, Navigate } from "react-router-dom";
import Start from "../components/Start";
import End from "../components/End";
import Question from "../components/Question";

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
]);
