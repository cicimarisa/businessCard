import image from "./../assets/linkedin-profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';



export default function Main() {
    return (
        <main>
            <div className="container">
                <div className="profile">
                    <h1 className="profile--name">Cici Marisa Hardianti</h1>
                    <h2 className="profile--title">Frontend Developer</h2>
                    <p className="profile--url"><a target="_blank" href="https://www.freecodecamp.org/cicimarisahardianti" className="small">cicimarisahardianti.website</a></p>
                </div>

                <div className="actions">
                    <a href="mailto: cicimarisahardianti@gmail.com" className="email" target="_blank"><FontAwesomeIcon icon={faEnvelope} /><span>Email</span></a>
                    <a href="https://www.linkedin.com/in/cici-marisa-hardianti-541727106/" className="linkedin" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /><span>LinkedIn</span></a>
                </div>

                <div className="description">
                    <h3>About Me</h3>
                    <p>I am a frontend developer. It is my passion for my work that has taken me to where I am now. I am a sincere, honest, responsible, and creative person with an excellent attitude towards my work.
                    <br/>I love to learn new things especially new technologies. My thirst for knowledge keeps me go hand-in-hand</p>
                    <h3>Interest</h3>
                    <p>Finding good restaurant. Good Reader. Keeping things simple and clean fanatic.</p>
                </div>
            </div>
            <img src={image} alt="" className="profile--img" />
        </main>
    )
}