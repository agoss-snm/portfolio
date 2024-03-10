import './components/components.scss'
import NavBar from "./components/navBar";
import Main from './components/main';
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";


function App() {

  return (
    <>
        <NavBar/>
        <Main/>
        <AboutMe/>
        <Projects/>
        <Contact/>
    </>
  );
}

export default App;
