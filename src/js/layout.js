import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import ContextProvider from "./store/context";
import CardDetails from "./views/CardDetails.jsx";
import VehicleDetails from "./views/VehicleDetails.jsx";
import PlanetDetails from "./views/PlanetDetails.jsx";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <ContextProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/:idPeople" element={<CardDetails />} />
            <Route path="/vehicle/:idVehicle" element={<VehicleDetails />} />
            <Route path="/planet/:idPlanet" element={<PlanetDetails />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default Layout;
