import './components/components.scss'
import NavBar from "./components/navBar";
import Main from './components/main';
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from './components/experience'


function App() {

  return (
    <>
        <NavBar/>
        <Main/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
        
    </>
  );
}

export default App;
