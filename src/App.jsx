import "./App.css";

import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import Root from "./components/Root/Root";
import Home from "./components/Pages/Home/Home";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>

    )
  )

  return <>
  <RouterProvider router = {router}/>
  </>
}

export default App;
