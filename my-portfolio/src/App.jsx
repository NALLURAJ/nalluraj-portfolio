import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar>
        <div className="flex flex-col min-h-screen">
          {/* Main Routed Pages */}
          <div className="flex-grow">
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
             
            </Routes>
          </div>

          {/* Footer stays below */}
          <Footer />
        </div>
      </Navbar>
    </Router>
  );
}
<div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
  <h1 className="text-3xl font-bold">Hello</h1>
  <p>This text will change color with theme toggle</p>
</div>

export default App;
