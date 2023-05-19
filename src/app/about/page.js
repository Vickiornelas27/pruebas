'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';


import Button from '@mui/material/Button';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const page = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: isMobile ? '100%' : 1000,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
  

      <Grid container spacing={2}>
        <Grid item>
        <Box sx={{ width: isMobile ? '100%' : 500, height: isMobile ? 'auto' : 450 }}>

      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>   
    </Box>
    </Grid>
        <Grid item xs={20} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <center>
              <Typography gutterBottom variant="h5" component="div" >
                Nuestra mision
              </Typography>
              <Typography gutterBottom variant="subtitle" component="div" >
              Tecnilibros es la librería más importante de la ciudad de Ensenada. Considerada por la comunidad como una librería de tradición con más de 30 años trabajando.
Esta librería abre sus puertas en 1973, ocupando un pequeño local comercial anexo al desaparecido cine México, ubicado en la esquina de Av. Ruiz y Calle Séptima. Ganándose prestigio gracias al empeño de su fundador el Sr. Daniel Palacios Ramírez.
Tras casi 24 años y al cerrar las instalaciones del Cine México, en 1997 Tecnilibros cambia de ubicación y se establece en el Blvd. Ramírez Méndez. Y en septiembre de 1999 se abre de nuevo una sucursal en el centro de la ciudad llamada Tecnilibros Centro  En esta nueva sucursal se diseñó un área especialmente para niños, donde se realizan actividades para despertar el interés por los libros desde temprana edad.
              </Typography>
              <Button variant="contained" color='primary'>
        Success
      </Button>
              </center>
              
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  
];

export default page
