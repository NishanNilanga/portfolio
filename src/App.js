import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Home from './containers/Home';
import About from './containers/about';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import particles from "./utils.js/particles";

function App() {

  const location = useLocation();
  console.log(location);


  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles js */}

      {
        renderParticleJsHomePage && 
        <Particles id="particles" options={particles} init={handleInit}/>
      }

      

      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;
