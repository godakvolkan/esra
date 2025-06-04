import React from 'react';
import logo from '../images/AhseniaLogo.jpg';

const Header = ({ setActivePage }) => {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <img src={logo} alt="Ahsenia Logo" className="site-logo" />
          <div>
            <div className="logo">Ahsenia Restoran</div>
            <div className="slogan">Şıklığın ve Lezzetin Adı: Ahsenia</div>
          </div>
        </div>
        <nav>
          <button onClick={() => setActivePage("home")}>Ana Sayfa</button>
          <button onClick={() => setActivePage("contact")}>BİZE ULAŞIN</button>
          <button onClick={() => setActivePage("menu")}>Menü</button>
          <button onClick={() => setActivePage("reservation")}>Rezervasyon</button>
          <button onClick={() => setActivePage("complaint")}>Şikayet/Öneri</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;