import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Paper
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../styles/Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    feedbackType: '',
    subject: '',
    message: '',
    name: '',
    email: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({
      feedbackType: '',
      subject: '',
      message: '',
      name: '',
      email: ''
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box className="feedback-container">
      <Paper elevation={3} className="feedback-paper">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <MailOutlineIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Geri Bildiriminiz
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lütfen geri bildiriminizin türünü seçin ve bize detaylıca yazın.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit} className="feedback-form">
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="feedback-type-label">Geri Bildirim Türü</InputLabel>
            <Select
              labelId="feedback-type-label"
              id="feedback-type"
              name="feedbackType"
              value={formData.feedbackType}
              label="Geri Bildirim Türü"
              onChange={handleChange}
            >
              <MenuItem value="complaint">Şikayet</MenuItem>
              <MenuItem value="suggestion">Öneri</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Konu"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Mesajınız"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={6}
            required
          />

          <TextField
            fullWidth
            label="Adınız Soyadınız (İsteğe Bağlı)"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="E-posta Adresiniz (İsteğe Bağlı)"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            type="email"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
            fullWidth
          >
            Geri Bildirim Gönder
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Geri bildiriminiz başarıyla iletildi. Teşekkür ederiz!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Feedback; 