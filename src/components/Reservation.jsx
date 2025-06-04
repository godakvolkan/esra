import React from 'react';
import '../styles/Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation-container">
      <div className="reservation-card">
        <h2 className="reservation-title">Rezervasyon Oluştur</h2>
        <form className="reservation-form">
          <div className="form-group">
            <label>Ad Soyad</label>
            <input type="text" placeholder="Adınızı girin" required />
          </div>
          <div className="form-group">
            <label>Telefon</label>
            <input type="tel" placeholder="Telefon numaranız" required />
          </div>
          <div className="form-group">
            <label>E-posta</label>
            <input type="email" placeholder="E-posta adresiniz" required />
          </div>
          <div className="form-group">
            <label>Kişi Sayısı</label>
            <select>
              {[...Array(10)].map((_, i) => (
                <option key={i+1}>{i+1} Kişi</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Tarih</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Saat</label>
            <input type="time" required />
          </div>
          <div className="form-group">
            <label>Notlar</label>
            <textarea placeholder="Eklemek istediğiniz notlar"></textarea>
          </div>
          <button className="btn reservation-btn" type="submit">Rezervasyon Yap</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
