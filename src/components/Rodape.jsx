import {} from 'react'
import '../style/Rodape.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Ropade (){
  return(
    <footer>
      <h3>&copy; 2023 todos os direitos reservados</h3>
      <div className="footer-icons">
        <a href="https://www.facebook.com/oishi" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </a>
        <a href="https://www.instagram.com/oishi" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://www.linkedin.com/in/oishi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Linkedin
        </a>
        <a href="mailto:contato@oishi.com">
          <FaEnvelope /> E-mail
        </a>
      </div>
    </footer>
  )
}
export default Ropade