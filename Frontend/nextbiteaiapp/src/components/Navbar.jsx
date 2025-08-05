import { Link } from 'react-scroll'
import '../Navbar.css'

import {ChefHat} from 'lucide-react';


const Navbar = () => {

    return (
       <nav className="navbar">

        <div className = "logo"> <ChefHat color="#009966"/> NextBite.ai</div>

        <ul>
            <li><Link to="about" smooth ={true} duration= {100}>ABOUT</Link></li>
            <li><Link to= "works" smooth ={true} duration= {100}>HOW IT WORKS</Link></li>
            <li><Link to= "tips" smooth ={true} duration= {100}>FOOD TIPS</Link></li>
        </ul>

        <button className="cta-top">ASK THE AI</button>

       </nav>
            
    
    )
};


export default Navbar;


