import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="border-t flex justify-between px-6 py-3 items-center">
          <div>
            <p>Copyright &copy; - 2024</p>
          </div>
          <ul className="flex gap-x-2">
            <li><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin}/></a></li>
          </ul>
        </div>
    )
}