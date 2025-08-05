import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Works from './sections/Works'
import Foodtips from './sections/Foodtips'
import Footer from './components/Footer'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  

  return (
    <>
     <Navbar />

     <main>

     <Hero />

    <div id="about"><About /></div> 

    <div id="works"><Works /></div> 

    <div id="tips"><Foodtips /> </div> 

    </main>

     <Footer/>
    </>
  )
}

export default App;
