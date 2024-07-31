import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function BlogItem({ id, title, altText, imageUrl, description, isLast }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/${id}`);
  };

  const handleShareClick = () => {
    const shareLink = `${window.location.origin}/${id}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      setOpenSnackbar(true); // Show Snackbar when link is copied
    }, (err) => {
      console.error('Failed to copy link: ', err);
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          margin: 2,
          marginBottom: isLast ? 8 : 2,
          elevation: 4,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardMedia
          component="img"
          alt={altText}
          height="140"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleShareClick}>Share</Button>
          <Button size="small" onClick={handleLearnMoreClick}>Learn More</Button>
        </CardActions>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Snackbar will hide after 6 seconds
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export default BlogItem;
