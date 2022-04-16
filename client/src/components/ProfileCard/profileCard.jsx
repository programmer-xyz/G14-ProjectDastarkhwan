import './profileCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
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


const Input = styled('input')({
    display: 'none',
  });

function profileCards(){
    // const classes = styles();
    return (
        <div>
        <Grid container direction = "row" alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" sx = {{width:'400px',height:'400px'}}>
        <Grid item  sx = {{zIndex:'2'}}>
            <CardMedia style={{height:'150px',width:'150px',backgroundColor:'transparent',postion:"relative",top:"50px",left:"35px",right:"auto"}}
            component="img"
            image={testImage}
            alt="Abdul Muizz khan"
            sx = {{borderRadius:'50%',border:'5px solid #00000073'}}/>
        </Grid>
        <Grid item sx={{zIndex:'3'}} >        
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton size="large" sx= {{color:'#E76F51',postion:"relative",top:"100px",right:"28px"}} disableRipple color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
        </label>
        </Grid>
        <Grid container direction="column" sx = {{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'transparent',zIndex:'1'}}>
        <Grid item  >
        <Card sx={{ maxWidth: '350px' ,height:'532px',justifyContent:'center',alignItems:'center'}}>
        <CardActionArea disableRipple sx={{'backgroundColor': '#2A9D8F33'}}>
        </CardActionArea>
        <CardContent sx = {{marginTop:'18%'}}>
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography gutterBottom variant="h6" component="div">
            Abdul Muizz khan
          </Typography>
          </Grid>
          <Grid item  alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography variant="body2" color="text.secondary">
            muiz@gmail.com
          </Typography>
          </Grid>
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography variant="body2" color="text.secondary">
            +9732-45678
          </Typography>
          </Grid>
          <Divider sx={{color:"#E76F51",margin:"5% 0 5% 0",}}/>
          <Grid item alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" >
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
          </Typography>
          </Grid>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Grid>
        </div>
    );
}
export default profileCards;