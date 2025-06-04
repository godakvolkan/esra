import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section about-section">
          <h3>Ahsenia Restaurant</h3>
          <p>Şehrin kalbinde doğadan ilham alan lezzetler sunuyoruz.</p>
          <div className="social-links">
            {/* Font Awesome ikonları için linkler */}
            <a href="https://facebook.com/ahseniarestaurant" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/ahseniarestaurant" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/ahseniarestaurant/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> {/* Cite: About.jsx */}
              <i className="fab fa-instagram"></i>
            </a>
            {/* Diğer sosyal medya ikonları eklenebilir */}
          </div>
        </div>

        <div className="footer-section contact-info">
          <h3>İletişim</h3>
          <p><i className="fas fa-map-marker-alt"></i> Doğal Lezzetler Sokak No:17, Ahenk Mahallesi, 34700 Kadıköy / İstanbul, Türkiye</p>
          <p><i className="fas fa-phone"></i> +90 (216) 123 45 67</p>
          <p><i className="fas fa-envelope"></i> iletisim@ahseniarestaurant.com</p>
        </div>

        <div className="footer-section hours-info">
          <h3>Çalışma Saatleri</h3>
          <p>Pazartesi - Cuma: 11:00 - 22:00</p>
          <p>Cumartesi - Pazar: 10:00 - 23:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ahsenia Restaurant. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;