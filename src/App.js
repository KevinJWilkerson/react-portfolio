import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        {/* <Work></Work>
        <Contact></Contact>
        <Footer></Footer> */}
      </main>
    </div>
  );
}

export default App;
