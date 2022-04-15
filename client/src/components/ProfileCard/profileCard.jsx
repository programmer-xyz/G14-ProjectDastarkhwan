import './profileCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import testImage from './testImage.jpeg';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Grid } from '@mui/material';

const Input = styled('input')({
    display: 'none',
  });

function profileCards(){
    // const classes = styles();
    return (
        <div>
        <Grid container direction = "row" alignContent = {'center'} alignItems = {'center'}  justifyContent={'center'} display="flex" sx = {{width:'400px',height:'400px'}}>
        <Grid item sx = {{zIndex:'2'}}>
            <CardMedia style={{height:'200px',width:'200px',backgroundColor:'transparent',marginTop:'-4%',marginLeft:'5%',position:'absolute'}}
            component="img"
            image={testImage}
            alt="Abdul Muizz khan"
            sx = {{borderRadius:'50%',border:'5px solid #00000073'}}/>
        </Grid>
        <Grid item sx={{zIndex:'3',marginTop:'8%',paddingRight:'10%',marginLeft:'45%',marginTop:'40%'}}>        
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton size="large" sx= {{color:'#E76F51'}} disableRipple color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
        </label>
        </Grid>
        <Grid container sx = {{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'transparent',zIndex:'1'}}>
        <Grid item >
        <Card sx={{ maxWidth: '421px' ,maxHeight:'auto',justifyContent:'center',alignItems:'center'}}>
        <CardActionArea disableRipple sx={{'backgroundColor': '#2A9D8F33'}}>
        </CardActionArea>
        <CardContent sx = {{marginTop:'10%'}}>
          <Typography gutterBottom variant="h6" component="div">
            Abdul Muizz khan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Grid>
        </div>
    );
}
export default profileCards;