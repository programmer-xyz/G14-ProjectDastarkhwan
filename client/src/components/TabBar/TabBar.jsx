import React, {useState} from 'react';
import './TabBar.css';


function ControlledTabs(props) {
  
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
            <div class='container12'>
            <button onClick={()=>{handlClick(2)}} className="button orangeborder">{props.itemThree}</button>
        </div>
        );
    }
    else
    {   
        return (
            <div class='container1'>
            <button onClick={()=>{handlClick(0)}} className={"button"+(buttons.button1?" orangeborder": " noborder")}>{props.itemOne}</button>
            <button onClick={()=>{handlClick(1)}} className={"button"+(buttons.button2?" orangeborder": " noborder")}>{props.itemTwo}</button> 
            <button onClick={()=>{handlClick(2)}} className={"button"+(buttons.button3?" orangeborder": " noborder")}>{props.itemThree}</button>
        </div>
        
        );
    }
}

export default ControlledTabs;

