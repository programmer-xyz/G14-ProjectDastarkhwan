import './profileCard.css';
import * as React from 'react';
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import testImage from './testImage.jpeg';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
  fontFamily: [
      'Poppins',
      'Sans-Serif',
  ].join(','),
  color:'#264653',
  font:'normal normal normal 42px/109px Poppins',
  },});

const Input = styled('input')({
    display: 'none',
  });

function profileCards(props){
    return (
        <div class ="container cards">
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex">
          <CardMedia style={{ fontFamily: "Poppins",
              height:'150px',width:'150px',backgroundColor:'transparent', justifyContent: 'center'}}
            component="img"
            image={testImage}
            alt="Abdul Muizz khan"
            sx = {{borderRadius:'50%',border:`5px solid ${props.Resturant?"#00000073":"rgba(231, 111, 81, 0.4)"}`}}/>  
          </Grid>  
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex">
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton size="large" sx= {{color:`white`, top: '-45px', right: '-40px',backgroundColor:`${props.Resturant?"#264653":"#E76F51"}`}} disableRipple color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
            </label>
          </Grid>
        <Grid item  >
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography gutterBottom variant="h6" component="div" textAlign={'center'} theme = {theme}>
           {`${props.name}`}
          </Typography>
          </Grid>
          <Grid item  alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography variant="body2" color="text.secondary" textAlign={'center'} theme = {theme}>
          {`${props.email}`}
          </Typography>
          </Grid>
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography variant="body2" color="text.secondary" theme = {theme}>
          {`${props.number}`}
          </Typography>
          </Grid>
          <Divider sx={{color:`${props.Resturant?"#132B34":"#E76F51"}`,margin:"5% 0 5% 0"}}/>
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography variant="body2" color="text.secondary" textAlign={'center'} theme = {theme}>
          {`${props.description}`}
          </Typography>
          </Grid>
        </Grid>
        </div>
    );
}
export default profileCards;