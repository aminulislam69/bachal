import React from 'react'
import { Grid, TextField, Button} from '@mui/material'
import loginimg from '../assets/loginimg.jpg'
import Google from '../assets/Google.png'
import Headingforreglog from '../components/headingforreglog'

const Resistration = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regcontainer'>
            <Headingforreglog className = "headingreglog" title = "Login to your account!"/>
            <img className = "google" src={Google}></img>
            
            <div className='reginput'>
              <TextField type='email' id="outlined-basic" label="Email Address" variant="outlined" />  
            </div>
            
            <div className='reginput'>
              <TextField type='password' id="outlined-basic" label="Password" variant="outlined" />  
            </div>
            <div className='regbutton'>
            <Button variant="contained">Login to Continue</Button>
            </div>
            
         </div>
        </Grid>
        <Grid item xs={6}>

          <img className = "logimg" src={loginimg}></img>
          
        </Grid>
  </Grid>
  )
}

export default Resistration