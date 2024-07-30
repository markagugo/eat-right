import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  backgroundColor: '#25D366', // WhatsApp green color
  color: 'white',
  '&:hover': {
    backgroundColor: '#128C7E', // Darker green on hover
  },
}));

const WhatsAppFab = () => {
  return (
    <StyledFab
      variant="extended"
      size="medium"
      href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp link
      target="_blank"
    >
      <WhatsAppIcon sx={{ mr: 1 }} />
      Chat with us
    </StyledFab>
  );
};

export default WhatsAppFab;
