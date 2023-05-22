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
  margin: '20px',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',

});

const page = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Paper
    sx={{
      p: 3,
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
    img: 'https://previews.123rf.com/images/andreypopov/andreypopov1808/andreypopov180801023/107017363-grupo-de-personas-sentadas-en-un-c%C3%ADrculo-leyendo-libros.jpg'
  },
  {
    img: 'https://i.pinimg.com/736x/ce/34/b3/ce34b3821097e73972408fd726570630.jpg',
    title: 'Books',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71q3D33qowL._AC_SY450_.jpg',
    title: 'Candle',
  },
  {
    img: 'https://www.dondeir.com/wp-content/uploads/2021/07/clarice-cafebreria.jpg',
    title: 'Coffee table',
  },
  {
    img: 'https://smartbubblegum.com/wp-content/uploads/2021/09/Unknown.jpeg',
    title: 'Doors',
  },
  {
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copia-de-portada-de-novela-design-template-d16bfe2953a362480e1663a936bf3e09_screen.jpg?ts=1637000211',
    title: 'Coffee',
  },
  {
    img: 'https://estaticos.esmadrid.com/cdn/farfuture/ry-1vn6S7alCunJGKOMHcFIyLE3U4L6iZ_m79nyIj60/mtime:1646732454/sites/default/files/styles/content_type_full/public/widgets/items/images/gettyimages-836595034.jpg?itok=N_--0gS7',
    title: 'Storage',
  },
  
];

export default page
