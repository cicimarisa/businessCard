import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faGithub,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer>
            <a className='social--media' href='https://www.instagram.com/cicimarisahardianti/' target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl" aria-labelledby="Instagram Icon"/></a>
            <a className='social--media' href='https://github.com/cicimarisa' target="_blank"><FontAwesomeIcon icon={faGithub} size="xl" aria-labelledby="Github Icon"/></a>
        </footer>
    )
}