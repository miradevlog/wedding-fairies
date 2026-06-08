import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout.jsx";
import Home from "./components/hero.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;