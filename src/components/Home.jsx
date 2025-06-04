import React from 'react';
import anasayfa1 from "../images/anasayfa1.jpg";
import anasayfa2 from "../images/anasayfa2.jpg";
import anasayfa3 from "../images/anasayfa3.jpg";
import anasayfa4 from "../images/anasayfa4.jpg";
import anasayfa5 from "../images/anasayfa5.jpg";

const features = [
  {
    title: "Lezzet Garantisi",
    desc: "Taze ve kaliteli malzemelerle sunulan benzersiz tatlar.",
    icon: <i className="fa-solid fa-bowl-food"></i>
  },
  {
    title: "Şık",
    desc: "Modern ve rahat bir şekilde uygulanabilen bir yemek deneyimi.",
    icon: <i className="fa-solid fa-masks-theater"></i>
  },
  {
    title: "Hızlı Rezervasyon",
    desc: "Kolayca online rezervasyon yapabilirsiniz.",
    icon: <i className="fa-solid fa-calendar-check"></i>
  },
  {
    title: "Güler Yüzlü Hizmet",
    desc: "Profesyonel ve samimi ekibimizle her zaman yanınızdayız.",
    icon: <i className="fa-solid fa-face-smile"></i>
  },
  {
    title: "Vegan & Vejetaryen Seçenekler",
    desc: "Her damak zevkine uygun geniş menü seçenekleri.",
    icon: <i className="fa-solid fa-leaf"></i>
  },
  {
    title: "Ücretsiz Wi-Fi",
    desc: "Restoranımızda ücretsiz ve hızlı internet erişimi.",
    icon: <i className="fa-solid fa-wifi"></i>
  },
  {
    title: "Otopark İmkanı",
    desc: "Restoranımıza özel ücretsiz otopark alanı.",
    icon: <i className="fa-solid fa-square-parking"></i>
  },
  {
    title: "Canlı Müzik",
    desc: "Akşamları canlı müzik performansları ile keyifli anlar.",
    icon: <i className="fa-solid fa-music"></i>
  }
];

const heroImages = [anasayfa1, anasayfa2, anasayfa3, anasayfa4, anasayfa5];

const Home = ({ setActivePage }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="modern-home">
      <div className="hero-section" style={{
        backgroundImage: `url(${heroImages[current]})`
      }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Ahsenia Restaurant</h1>
          <p className="hero-slogan">Şıklığın ve Lezzetin Adresi</p>
          <button className="btn hero-btn" onClick={() => setActivePage('reservation')}>Rezervasyon Yap</button>
        </div>
      </div>
      <div className="features-row">
        {features.map((f, i) => (
          <div className="feature-modern-card" key={i}>
            <div className="feature-modern-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;