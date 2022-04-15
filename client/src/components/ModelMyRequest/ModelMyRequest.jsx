import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import './ModelMyRequest.scss';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import RequestItem from "../RequestItems/requestItems.jsx"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { height } from '@mui/system';
// {/* <RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={true} NGOrequests={false} Resreq={true} buttonStat={0}/>} */}
var templist = [{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

}]
export default function Modals(prop)
{
  let naviagte = useNavigate();
  const {modelMsg,state,modalImage,actionMsg,route} = prop;
  const [open,setOpen] = React.useState(state);

  
  function handleClose(reason)
  {
    if (reason !== "backdropClick")
    {
      return 
    }
    setOpen(false);
  }
  // const Item = styled(Paper)(() => ({
  //   backgroundColor: '#ffff',

  // }));
  function onClick()
  {
    setOpen(false);
    naviagte(`/${route}`)

  }

  return (
    <div>
      <Dialog sx= {{borderRadius:"100px"}}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <DialogTitle>My Request</DialogTitle>
        <Grid container  justifyContent={'center'} alignItems="center" >
        <Grid item justifyContent={'center'} alignItems="center"  >
        <DialogContent  sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <Typography>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </Typography>
        </DialogContent>
        </Grid>
        <List sx={{width:'100%', height:'100%'}}>
        {templist.map(item =>(
            <RequestItem image={item.image} name={item.name} heading1={item.heading1} heading2={item.heading2} pargaraph1={item.pargaraph1} date={item.date} time={item.time} userRequests={false} NGOrequests={item.NGOrequests} Resreq={false} buttonStat={0}/>
        ))}
        </List>
        <Grid item  >
          <DialogActions>
          <button onClick={onClick} type = "submit" className="buttons1" >{actionMsg}</button>
          </DialogActions>
        </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}