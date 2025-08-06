import '../Hero.css'
import {Link as RouterLink} from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero">
            <h1>Turn Leftovers <br />Into Your Next Bite</h1>
            <p>An AI recipe generator that makes easy meals from what you already have at home.</p>

            <RouterLink to="/chatbot" className='tryitnowbutton'>Try it Now</RouterLink>
        </section>
    )
}

export default Hero; 