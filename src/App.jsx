import "./App.css";
import Aboutme from "./components/Aboutme";

import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewProjectSection from "./components/NewProjectSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { PortThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <PortThemeProvider>
      <Navbar></Navbar>
      <Cover></Cover>
      <Aboutme />
      <Skills />
      <Projects></Projects>

      <NewProjectSection></NewProjectSection>
      <Footer />
    </PortThemeProvider>
  );
}

export default App;
