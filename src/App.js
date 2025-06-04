import React, { useState } from 'react'; // useState hook'unu ekledik
import Header from './components/Header.jsx'; // Header bileşenini import ettik
import Footer from './components/Footer.jsx'; // Footer bileşenini import ettik
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Reservation from './components/Reservation.jsx';
import Contact from './components/Contact.jsx';

import './styles/App.css'; // Mevcut App.css dosyanız
import './styles/index.css'; // Mevcut index.css dosyanız
// Yeni bir global stil dosyası ekleyebiliriz, örneğin 'src/styles/main.css'
// import './styles/main.css';

function App() {
  const [activePage, setActivePage] = useState('home'); // Aktif sayfayı yönetmek için state

  // Hangi bileşenin aktif sayfaya göre render edileceğini belirleyen fonksiyon
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'reservation':
        return <Reservation />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {/* Header bileşenine setActivePage prop'unu geçirdik */}
      <Header setActivePage={setActivePage} /> 
      
      <main className="content-area"> {/* Ana içerik alanı */}
        {renderPage()} {/* Aktif sayfayı render ediyoruz */}
      </main>

      <Footer /> {/* Footer bileşenini ekledik */}
    </div>
  );
}

export default App;