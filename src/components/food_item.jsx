import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function FoodItem({ name, altText, imageUrl, isLast, onClick }) {
  return (
    <div onClick={() => onClick(name)}>
        <Card sx={{ maxWidth: 345, margin: 2, marginBottom: isLast ? 8 : 2,  elevation: 4, 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <CardMedia
            component="img"
            alt={altText}
            height="80"
            image={imageUrl}
        />
        <CardContent sx={{ textAlign: 'center' }}>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: '0.875rem', textAlign: 'center' }} // Center-align text
            >
            {name}
            </Typography>
        </CardContent>
        </Card>
    </div>
  );
}

export default FoodItem;
