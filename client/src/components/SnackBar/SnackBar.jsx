import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })
export default  function SnackBar(props)
{
    const {message,severity,state,onClose} = props
       
    return(
        <Snackbar open={state} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity}  sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    )
}