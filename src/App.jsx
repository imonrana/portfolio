import "./App.css";

import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import Root from "./layout/Root/Root";
import Home from "./Pages/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Protfolio/Protfolio";
import Contact from "./components/Contact/Contact";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="service" element={<Services/>} />
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>

    )
  )

  return <>
  <RouterProvider router = {router}/>
  </>
}

export default App;
