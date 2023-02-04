import React from "react";
import RootLayout from "./layouts/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import UserRepos, { reposLoader } from "./pages/UserRepos";
import RepoDetails from "./pages/RepoDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/:username" element={<UserRepos />} loader={reposLoader} errorElement={"Error 404 : no public repo for this user"}/>
      <Route path="/:username/:repo" element={<RepoDetails />} loader={reposLoader}/>
      <Route
        path="*"
        element={
          <div>
            Page Not Found <Link to="/">Homepage</Link>
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
