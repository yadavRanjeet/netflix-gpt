import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
};

export default Body;

// import Login from "./Login";
// import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
// import Browse from "./Browse";
// import { useDispatch } from "react-redux";

// const Body = () => {
//   const dispatch = useDispatch()
//   const navigate= useNavigate()
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login />,
//     },
//     {
//       path: "/browse",
//       element: <Browse />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// };

// export default Body;
