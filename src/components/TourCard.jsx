import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://www.worldatlas.com/upload/bf/b2/20/edward-koorey-gcc3c6mfsm0-unsplash.jpg"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            Immerse into the fall
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 Hours
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
            <Rating name="read-only" value={4.5} size="small" readOnly precision={0.5} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              (655 Reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginLeft={0}>
              From Rs. 1477/-
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
