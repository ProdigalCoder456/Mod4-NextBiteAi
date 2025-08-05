import '../Footer.css'
import {ChefHat} from 'lucide-react';



const Footer = () => {

return(

    <div className='footer'>
        
        <div className = "logo2"> <ChefHat color="#009966" style={{backgroundColor:'transparent'}}/> NextBite.ai</div>

        <p className='copyright-info'>  &copy; 2025 NextBite AI. All rights reserved.</p>

        <div className='media-icons'>
            <i class="bi bi-facebook" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)"}}></i>
            <i class="bi bi-instagram" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)"}}></i>
            <i class="bi bi-twitter-x" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)"}}></i>
            <i class="bi bi-linkedin" style={{backgroundColor:'transparent', color :"rgba(255, 255, 255, 0.635)"}}></i>
        </div>

    </div>
)
}

export default Footer;