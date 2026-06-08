import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import About from "../components/about.jsx";
import Portfolio from "../components/portfolio.jsx";
import Contact from "../components/contact.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
