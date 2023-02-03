import React from "react";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import UserRepos from "./pages/UserRepos";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/:user" element={<UserRepos />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
