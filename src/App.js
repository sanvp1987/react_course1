import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import { Contact } from "./Components/Contact";
import Error from "./Components/Error";
import Insta from "./Components/Insta";
import Mail from "./Components/Mail";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/app" element={<Home />}/>
          </Route>

          <Route path="/app/:userid" element={<UserDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
            <Route index element={<Mail />} />
            {/*{default Page Rendering} */}
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
