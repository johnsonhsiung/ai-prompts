// components/ButtonGrid.js
import Link from 'next/link';
import { Grid2, Button } from '@mui/material';

const ButtonGrid = () => {
  return (
    <Grid2 container spacing={2} padding={2}>
      <Grid2 item="true" xs={12} sm={6} md={4}>
        <Link href="/short_story" passHref>
          <Button variant="contained" fullWidth>
            Short Story Generator
          </Button>
        </Link>
      </Grid2>
      <Grid2 item="true" xs={12} sm={6} md={4}>
        <Link href="/personas" passHref>
          <Button variant="contained" fullWidth>
            Personas
          </Button>
        </Link>
      </Grid2>
      <Grid2 item="true" xs={12} sm={6} md={4}>
        <Link href="/quiz" passHref>
          <Button variant="contained" fullWidth>
            Quiz Generator 
          </Button>
        </Link>
      </Grid2>
      {/* Add more buttons as needed */}
    </Grid2>
  );
};

export default ButtonGrid;