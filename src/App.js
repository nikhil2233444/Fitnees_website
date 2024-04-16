import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans.jsx';
import Programs from './Components/Programs/Program.jsx'
import Resons from './Components/Resons/Resons.jsx';
import Join from './Components/Join/Join.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
     
         <Hero/>
         <Programs/>
         <Resons/>
         <Plans/>
         <Testimonial/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
