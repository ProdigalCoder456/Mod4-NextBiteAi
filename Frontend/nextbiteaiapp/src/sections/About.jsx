import '../About.css'
import image1 from '../images/girlwithlaptop.jpg'

const About = () => {

    return(
    <div className = "about">


        <div className='about-info'>
        <div className='image1'>
            <img src = {image1} width='510' height= '350'/>
        </div>

        <div className='about-text'>
        <h1>About <span className='nextbiteai-about'>NextBite.ai</span></h1>
        <p className='paragraph1'>NextBite.ai was created to make cooking easier, smarter, and less wasteful. Powered by Google's Gemini Flash 2.0 model, our AI recipe generator transforms your leftover ingredients into delicious, simple, beginner-friendly recipes.</p>
        <p className='paragraph2'>Whether you're new to cooking or just need quick, no-fuss meal ideas, our generator keeps things straightforward. No fancy techniques, no hard-to-find ingredients—just practical, tasty meals from what you already have. </p>
        <p className='paragraph3'>We designed NextBite.ai with busy home cooks, conscious users looking to reduce waste, frugal-conscious cooks protecting their grocery budgets, health-conscious eaters seeking fresh meal ideas, and busy families in mind.</p>

        <div className='buttons-bottom'>
        <button className="about-bottom">Zero Food Waste </button>
        <button className="about-bottom">Quick & Easy</button>
        <button className="about-bottom">Eco-conscious</button>
        <button className="about-bottom"> Stress-free</button>
        </div>
        </div>

       
        </div>

    </div>
    )
    
}

export default About; 