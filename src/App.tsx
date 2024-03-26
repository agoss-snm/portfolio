import './components/components.scss'
import './components/mediaQuery.scss'
import NavBar from "./components/navBar";
import Main from './components/main';
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from './components/experience'
import Footer from './components/footer'

function App() {

  return (
    <>
        <NavBar/>
        <Main/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
