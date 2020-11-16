
import './App.css';
import NavBar from './components/NavBar.js'
import Description from './components/Description.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'
import Social from './components/Social.js'
import Projects from './components/Projects.js'
function App() {
 
  return (
    <div className="App">
       <NavBar/>
    <div className="FrontView">
      
    
     <Description/>
     <Projects />
     <Skills />
     



     <div className="Socials">
     <div id="Footer"class="TextFooter"> find me over here !  </div>
     <Social link="https://www.linkedin.com/in/samirez/" iconName="linkedin"/>
     <Social link="https://twitter.com/SaRez_wd" iconName="twitter"/>
     <Social link="https://github.com/SamRezDev" iconName="github"/>
     </div>
    </div>
     </div>
  );
}

export default App;
