import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import MrDropzone from './tools/MrDropzone';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#F6B336',
}));

const HeadSection = () => (
  <div className='relative flex flex-col items-start gap-3 w-full md:w-[758px]'>
    <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
    <h6 className='text-3xl font-bold dark:text-orange ml-2'>Documents</h6>
  </div>
);

const Documents = () => {
  const theme = useTheme();
  return (
    <div>
      <HeadSection />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <MrDropzone />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <MrDropzone />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <MrDropzone />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Documents;
