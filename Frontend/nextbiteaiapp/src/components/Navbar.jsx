// navbar

import { Link as ScrollLink} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'
import '../Navbar.css'

import {ChefHat} from 'lucide-react';


const Navbar = () => {

    return (
        
        <div className='navtop'>

        <RouterLink to ="/" className = "logo"> <ChefHat color="#009966"/>NextBite.ai</RouterLink>
        <nav className="navbar">

        <ul>
            <li><ScrollLink to="about" smooth ={true} duration= {100}>ABOUT</ScrollLink></li>
            <li><ScrollLink to= "works" smooth ={true} duration= {100}>HOW IT WORKS</ScrollLink></li>
            <li><ScrollLink to= "tips" smooth ={true} duration= {100}>FOOD TIPS</ScrollLink></li>
        </ul>

       </nav>

       <RouterLink to="/chatbot" className="cta-top">ASK THE AI</RouterLink>
    
       </div>
            
    
    )
};


export default Navbar;


