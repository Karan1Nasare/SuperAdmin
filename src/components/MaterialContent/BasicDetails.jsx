import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  TextField,
  FormControl,
  Paper,
  Grid,
  Container,
} from '@mui/material';
import MrDropzone from './tools/MrDropzone';
import MrCKEditor from './tools/CKeditor/MrCKEditor';

const BasicDetailsContainer = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: '80vh', // Adjust this value as needed
  padding: theme.spacing(2),
  marginTop: theme.spacing(7), // Adjust this value as needed for spacing from the top
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

const HeadSection = () => (
  <div className='relative flex flex-col items-start gap-3 w-full md:w-[758px]'>
    <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
    <h6 className='text-3xl font-bold dark:text-orange ml-2'>Thumbnail</h6>
    <p className='ml-1 w-full md:w-[846px] font-helvetica font-normal text-[16px] leading-[18px] text-[#BDBDBD]'>
      Select or upload a picture that shows what's in your video. A good
      thumbnail stands out and draws viewers' attention.
    </p>
  </div>
);

function BasicDetails() {
  const theme = useTheme();

  return (
    <Container>
      <BasicDetailsContainer>
        {/* Thumbnail Section */}
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
          </Grid>
        </Box>
        <Grid container mt={2}>
          <Grid item xs={12}>
            <Item>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  id='outlined-basic-1'
                  label='Title'
                  variant='outlined'
                />
              </FormControl>
            </Item>
          </Grid>
        </Grid>
        <Grid container mt={2} mb={6}>
          <Grid item xs={12}>
            <Item>
              <FormControl fullWidth sx={{ m: 1 }}>
                <MrCKEditor />
              </FormControl>
            </Item>
          </Grid>
        </Grid>
      </BasicDetailsContainer>
    </Container>
  );
}

export default BasicDetails;
