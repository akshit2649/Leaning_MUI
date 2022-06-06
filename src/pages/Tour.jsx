import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordian';

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas!
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum maxime eius, id
          dolores asperiores, facere quam odit ut atque ipsum excepturi magnam, neque obcaecati
          sapiente mollitia? Corrupti error velit, qui similique inventore cum, optio maiores vitae
          adipisci iste quaerat.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
    </Container>
  );
};

export default Tour;
