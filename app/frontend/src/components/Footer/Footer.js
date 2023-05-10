// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="Footer">
//       <p>&copy; 2023 - CanUPass</p>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-description">
        <p>CanUPass es una aplicación de cuestionarios.</p>
      </div>
      <div className="social-media-links">
        <a href="https://www.facebook.com" target="_blank">Facebook</a>
        <a href="https://www.twitter.com" target="_blank">Twitter</a>
        <a href="https://www.instagram.com" target="_blank">Instagram</a>
      </div>
      <div className="legal-links">
        <a href="#privacy-policy">Política de Privacidad</a>
        <a href="#terms-of-service">Términos de Servicio</a>
      </div>
      <p>&copy; 2023 - CanUPass</p>
    </footer>
  );
}

export default Footer;
