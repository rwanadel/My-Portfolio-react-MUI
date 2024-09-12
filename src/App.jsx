import "./App.css";

import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import NewProjectSection from "./components/NewProjectSection";
import Projects from "./components/Projects";
import { PortThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <PortThemeProvider>
      <Navbar></Navbar>
      <Cover></Cover>
      <Projects></Projects>

      <NewProjectSection></NewProjectSection>
    </PortThemeProvider>
  );
}

export default App;
