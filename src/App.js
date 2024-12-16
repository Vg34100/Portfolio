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

// -
import KnowledgeHub from "./components/Knowledge/KnowledgeHub";
import DocumentationList from "./components/Knowledge/Lists/DocumentationList";
import TutorialList from "./components/Knowledge/Lists/TutorialList";
import ReferenceList from "./components/Knowledge/Lists/ReferenceList";
import ShowcaseList from "./components/Knowledge/Lists/ShowcaseList";
import UnrealEngine from "./components/Knowledge/Documentation/UnrealEngine";
import GameDevBasics from "./components/Knowledge/Tutorials/GameDevBasics";
import CppPatterns from "./components/Knowledge/Reference/CppPatterns";
import AnimationPrinciples from "./components/Knowledge/Showcases/AnimationPrinciples";
import UnrealEngineFundamentals from "./components/Knowledge/Documentation/UnrealEngineFundamentals.js";


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
          <Route path="/tools/ai" element={<GeneralAI />} />

          <Route path="/tools/ai/neural/bidirectional" element={<Bidirectional />} />
          <Route path="/tools/ai/neural/hopfield" element={<Hopfield />} />
          <Route path="/tools/ai/neural/perceptron" element={<Perceptron />} />
          <Route path="/tools/ai/neural/perceptron-advanced" element={<PerceptronAdvanced />} />
          <Route path="/tools/ai/neural/epoch" element={<EpochSolver />} />
          <Route path="/tools/ai/genetic/basic" element={<Genetics />} />
          <Route path="/tools/ai/genetic/custom" element={<GeneticsCustom />} />
          <Route path="/tools/ai/fuzzy/basic" element={<FuzzySolver />} />
          <Route path="/tools/ai/fuzzy/alternate" element={<FuzzySolverAlternate />} />
          <Route path="/tools/ai/logic/inference" element={<Inference />} />
          
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/ai" element={<GeneralAI />} />

          <Route path="/knowledge" element={<KnowledgeHub />} />
          <Route path="/knowledge/docs" element={<DocumentationList />} />
          <Route path="/knowledge/tutorials" element={<TutorialList />} />
          <Route path="/knowledge/reference" element={<ReferenceList />} />
          <Route path="/knowledge/showcases" element={<ShowcaseList />} />

          {/* Example pages */}
          <Route path="/knowledge/docs/unreal-engine" element={<UnrealEngine />} />
          <Route path="/knowledge/tutorials/game-dev-basics" element={<GameDevBasics />} />
          <Route path="/knowledge/reference/cpp-patterns" element={<CppPatterns />} />
          <Route path="/knowledge/showcases/animation-principles" element={<AnimationPrinciples />} />

          <Route path="/knowledge/docs/unreal-engine-fundamentals" element={<UnrealEngineFundamentals />} />


          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
