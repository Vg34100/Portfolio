import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "./components/Timeline/Timeline";

import Arcadia from "./components/Projects/ProjectPages/Arcadia";
import DEEP from "./components/Projects/ProjectPages/DEEP";

import Inference from "./components/Projects/ProjectPages/Inference";
import FuzzySolver from "./components/Projects/ProjectPages/FuzzySolver";
import FuzzySolverAlt from "./components/Projects/ProjectPages/FuzzySolverAlternate";

import PerceptronSolver from "./components/Projects/ProjectPages/PerceptronSolver";
import PerceptronSolverAdv from "./components/Projects/ProjectPages/PerceptronSolverAdvanced";

import EpochSolver from "./components/Projects/ProjectPages/EpochSolver";

// =
import Bidirectional from "./components/Projects/ProjectPages/Bidirectional";
import Genetics from "./components/Projects/ProjectPages/Genetics";
import GeneticsCustom from "./components/Projects/ProjectPages/GeneticsCustom";
import Hopfield from "./components/Projects/ProjectPages/Hopfield";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />

          <Route path="/arcadia" element={<Arcadia />} />
          <Route path="/deep" element={<DEEP />} />

          <Route path="/inference" element={<Inference />} />
          <Route path="/fuzzy" element={<FuzzySolver />} />
          <Route path="/fuzzy-alt" element={<FuzzySolverAlt />} />
          <Route path="/perceptron" element={<PerceptronSolver />} />
          <Route path="/perceptron-adv" element={<PerceptronSolverAdv />} />
          <Route path="/epoch" element={<EpochSolver />} />

          {/*  */}
          <Route path="/bidirectional" element={<Bidirectional />} />
          <Route path="/genetics" element={<Genetics />} />
          <Route path="/genetics-custom" element={<GeneticsCustom />} />
          <Route path="/hopfield" element={<Hopfield />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
