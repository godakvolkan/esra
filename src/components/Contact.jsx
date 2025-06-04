import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-card">
      <h2 className="contact-title">Bize Ulaşın</h2>
      <div className="contact-info">
        <p><i className="fa-solid fa-location-dot"></i> Adres: Örnek Mah. 123. Sokak No: 45, İstanbul</p>
        <p><i className="fa-solid fa-phone"></i> Telefon: 0212 123 45 67</p>
        <p><i className="fa-solid fa-envelope"></i> E-posta: info@ahsenia.com</p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label>Ad Soyad</label>
          <input type="text" placeholder="Adınızı girin" required />
        </div>
        <div className="form-group">
          <label>E-posta</label>
          <input type="email" placeholder="E-posta adresiniz" required />
        </div>
        <div className="form-group">
          <label>Mesajınız</label>
          <textarea placeholder="Mesajınızı yazın" required />
        </div>
        <button className="btn contact-btn" type="submit">Gönder</button>
      </form>
      <div className="contact-social">
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  </div>
);

export default Contact;
