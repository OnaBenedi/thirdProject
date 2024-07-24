import "./FooterBody.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function FooterBody() {
  return (
    <div>
      <footer className="footer">
          <div className="footer-content">
            <p>© 2024 All rights reserved.</p>
            <p>Developed by:</p>
            <div className="links-container">
              <a href="https://www.linkedin.com/in/ona-benedi/" id="linkedin">Ona Benedí</a> <FontAwesomeIcon icon={faLinkedin} />
              <a href="https://www.linkedin.com/in/maria-bona-enguita/" id="linkedin">María Bona </a> <FontAwesomeIcon icon={faLinkedin} />
              <a href="https://www.linkedin.com/in/chokchrist/" id="linkedin">Christopher Jiménez </a> <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
      </footer>
    </div>
  )
}

export default FooterBody
