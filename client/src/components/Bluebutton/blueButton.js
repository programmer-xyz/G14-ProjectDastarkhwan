import './blueButton.css';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

const Bluebutton = (props) =>{

    return(
        
        <ButtonUnstyled className= "sign-in ">{props.value}</ButtonUnstyled>
    )
}

export default Bluebutton