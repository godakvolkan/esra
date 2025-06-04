import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import logo from '../images/AhseniaLogo.jpg';

const Header = ({ setActivePage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Ana Sayfa', page: 'home' },
    { label: 'BİZE ULAŞIN', page: 'contact' },
    { label: 'Menü', page: 'menu' },
    { label: 'Rezervasyon', page: 'reservation' },
    { label: 'Şikayet/Öneri', page: 'feedback' }
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img 
              src={logo} 
              alt="Ahsenia Logo" 
              style={{ 
                height: '50px', 
                width: 'auto',
                borderRadius: '8px'
              }} 
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 600,
                  color: theme.palette.primary.main
                }}
              >
                Ahsenia Restoran
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  fontStyle: 'italic'
                }}
              >
                Şıklığın ve Lezzetin Adı
              </Typography>
            </Box>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 1,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            {menuItems.map((item) => (
              <Button
                key={item.page}
                onClick={() => setActivePage(item.page)}
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  },
                  minWidth: isMobile ? '100%' : 'auto',
                  textTransform: 'none',
                  fontWeight: 500
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;