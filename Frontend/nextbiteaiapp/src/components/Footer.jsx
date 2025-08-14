// footer 

import '../Footer.css'
import {ChefHat} from 'lucide-react';



const Footer = () => {

return(

    
    <footer className='footer'>
        
        <div className = "logo2"> <ChefHat color="#06db94" style={{backgroundColor:'transparent'}}/> NextBite.ai</div>

        <p className='copyright-info'>  &copy; 2025 NextBite AI. All rights reserved.</p>

        <div className='media-icons'>
            <i class="bi bi-facebook" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)", fontSize:"1.1rem"}}></i>
            <i class="bi bi-instagram" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)", fontSize:"1.1rem"}}></i>
            <i class="bi bi-twitter-x" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)", fontSize:"1.1rem"}}></i>
            <i class="bi bi-linkedin" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)", fontSize:"1.1rem"}}></i>
        </div>

    </footer>
)
}

export default Footer;