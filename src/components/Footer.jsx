import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faGithub,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer>
            <a className='social--media' href='https://www.instagram.com/cicimarisahardianti/' target="_blank" aria-label='Instagram'><FontAwesomeIcon icon={faInstagram} size="xl"/></a>
            <a className='social--media' href='https://github.com/cicimarisa' target="_blank" aria-label='Github'><FontAwesomeIcon icon={faGithub} size="xl" /></a>
        </footer>
    )
}