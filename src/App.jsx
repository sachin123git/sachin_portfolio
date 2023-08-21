
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Leftside from './components/Banner/leftside'
import Rightside from "./components/Banner/rightside"
import Feature from './components/Feature/feature'
import Project from './components/projects/project'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import FooterBottom from './components/Footer/FooterBottom'
function App() {

  return (
    <>
      <Navbar />
      <div className="banner">
        <Leftside />
        <Rightside />
      </div>
      <Feature />
      <Project/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
    </>
  );
}

export default App
