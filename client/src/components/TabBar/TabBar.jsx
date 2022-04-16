import React, {useState} from 'react';
import font from './TabBar.scss'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box';


// const StyledTab = withStyles(theme => ({
//   root: {
//     textTransform: "none",
//     color: "#26465399",
//     borderBottom: " 1px solid #E4BF68",
//     // fontWeight: theme.typography.fontWeightRegular,
//     // fontSize: theme.typography.pxToRem(15),
//     font: font.myFont,
//     marginRight: theme.spacing(1)
//   }
// }))(props => <Tab disableRipple {...props} />);
const tabStyle = {
    default_tab:{
        color: '#26465399',
        font: font.myFont,
        backgroundColor:"transparent",
        borderBottom: " 1px solid #E4BF68",
    },
    active_tab:{
        color: "#E76F51",
        borderBottom: "3px solid #E76F51",
        backgroundColor: 'transparent',
        font: font.myFont,
    }
};

function getStyle (isActive) {
    console.log(isActive)
    return isActive ? tabStyle.active_tab : tabStyle.default_tab
}
function ControlledTabs(props) {
  
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    props.getId(newValue);
    setValue(newValue);
  };
    
    const [buttons,setButtons] = useState({
        button1:true,
        button2:false,
        button3:false
    });
    const  handlClick = i =>{
        if (i===0)
        {
            let obj={
                button1:true,
                button2:false,
                button3:false
            }
            setButtons(obj)
        }
        else if (i===1)
        {
            let obj={
                button1:false,
                button2:true,
                button3:false
            }
            setButtons(obj)
        }
        else
        {
            let obj={
                button1:false,
                button2:false,
                button3:true
            }
            setButtons(obj)
        }
    }
    if(props.Restuarant)
    {   

        return (
            <Tabs value={value}  onChange={handleChange}>
                <Tab sx={getStyle(value === 0)} label = {`${props.itemOne}`}>
                </Tab>
             </Tabs>

        );
    }
    else
    {   
        return (
        //     <div class='container1'>
        //     <button onClick={()=>{handlClick(0)}} className={"button"+(buttons.button1?" orangeborder": " noborder")}>{props.itemOne}</button>
        //     <button onClick={()=>{handlClick(1)}} className={"button"+(buttons.button2?" orangeborder": " noborder")}>{props.itemTwo}</button> 
        //     <button onClick={()=>{handlClick(2)}} className={"button"+(buttons.button3?" orangeborder": " noborder")}>{props.itemThree}</button>
        // </div>
        <Box sx={{ width: '100%' }}>
        <Tabs value={value}  onChange={handleChange} TabIndicatorProps={{style:{backgroundColor:"#E76F51"}}}>
            <Tab inkBarStyle = {{background:"#E76F51"}} style ={getStyle(value === 0)} label = {`${props.itemOne}`}>
            </Tab>
            <Tab style={getStyle(value === 1)} label = {`${props.itemTwo}`}>
            </Tab>
            <Tab style={getStyle(value === 2)} label = {`${props.itemThree}`}>
            </Tab>
        </Tabs>
        </Box>
        );
    }
}

export default ControlledTabs;

