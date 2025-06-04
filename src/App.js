import React, { useState } from 'react'; // useState hook'unu ekledik
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header.jsx'; // Header bileşenini import ettik
import Footer from './components/Footer.jsx'; // Footer bileşenini import ettik
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Reservation from './components/Reservation.jsx';
import Contact from './components/Contact.jsx';
import Feedback from './components/Feedback.jsx';

import './styles/App.css'; // Mevcut App.css dosyanız
import './styles/index.css'; // Mevcut index.css dosyanız
// Yeni bir global stil dosyası ekleyebiliriz, örneğin 'src/styles/main.css'
// import './styles/main.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Koyu mavi
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c62828', // Koyu kırmızı
      light: '#ff5f52',
      dark: '#8e0000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

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
      case 'feedback':
        return <Feedback />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header setActivePage={setActivePage} /> 
        
        <main style={{ flex: 1 }}> {/* Ana içerik alanı */}
          {renderPage()} {/* Aktif sayfayı render ediyoruz */}
        </main>

        <Footer /> {/* Footer bileşenini ekledik */}
      </div>
    </ThemeProvider>
  );
}

export default App;