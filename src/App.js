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

import FuzzySolver from "./components/Tools/AI/FuzzyLogic/FuzzySolver";
import FuzzySolverAlternate from "./components/Tools/AI/FuzzyLogic/FuzzySolverAlternate";

import Perceptron from "./components/Tools/AI/NeuralNetworks/Perceptron";
import PerceptronAdvanced from "./components/Tools/AI/NeuralNetworks/PerceptronAdvanced";

import EpochSolver from "./components/Tools/AI/NeuralNetworks/EpochSolver";

// =
import Bidirectional from "./components/Tools/AI/NeuralNetworks/Bidirectional";
import Genetics from "./components/Tools/AI/GeneticAlgorithms/Genetics";
import GeneticsCustom from "./components/Tools/AI/GeneticAlgorithms/GeneticsCustom";
import Hopfield from "./components/Tools/AI/NeuralNetworks/Hopfield";

import GeneralAI from "./components/Tools/AI/GeneralAI";
import Inference from "./components/Tools/AI/LogicSystems/Inference";
import Tools from "./components/Tools/Tools";


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

          <Route path="/tools" element={<Tools />} />
          <Route path="/ai" element={<GeneralAI />} />
          {/* <Route path="/articles" element={<ArticleList />} /> */}

          <Route path="/ai/neural/bidirectional" element={<Bidirectional />} />
          <Route path="/ai/neural/hopfield" element={<Hopfield />} />
          <Route path="/ai/neural/perceptron" element={<Perceptron />} />
          <Route path="/ai/neural/perceptron-advanced" element={<PerceptronAdvanced />} />
          <Route path="/ai/neural/epoch" element={<EpochSolver />} />
          <Route path="/ai/genetic/basic" element={<Genetics />} />
          <Route path="/ai/genetic/custom" element={<GeneticsCustom />} />
          <Route path="/ai/fuzzy/basic" element={<FuzzySolver />} />
          <Route path="/ai/fuzzy/alternate" element={<FuzzySolverAlternate />} />
          <Route path="/ai/logic/inference" element={<Inference />} />

          {/* <Route path="/inference" element={<Inference />} />
          <Route path="/fuzzy" element={<FuzzySolver />} />
          <Route path="/fuzzy-alt" element={<FuzzySolverAlt />} />
          <Route path="/perceptron" element={<PerceptronSolver />} />
          <Route path="/perceptron-adv" element={<PerceptronSolverAdv />} />
          <Route path="/epoch" element={<EpochSolver />} />

          
          <Route path="/bidirectional" element={<Bidirectional />} />
          <Route path="/genetics" element={<Genetics />} />
          <Route path="/genetics-custom" element={<GeneticsCustom />} />
          <Route path="/hopfield" element={<Hopfield />} /> */}

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
