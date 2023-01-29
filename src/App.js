import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/appRouter";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
