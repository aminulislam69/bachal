import React from 'react'
import { Grid, TextField, Button} from '@mui/material'
import registrationimg from '../assets/registrationimg.png'
import Headingforreglog from '../components/headingforreglog'

const Resistration = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regcontainer'>
            <Headingforreglog className = "headingreglog" title = "Get started with easily register"/>
            <p className='regpara'>Free register and you can enjoy it</p>
            <div className='reginput'>
              <TextField type='email' id="outlined-basic" label="Email Address" variant="outlined" />  
            </div>
            <div className='reginput'>
              <TextField type='text' id="outlined-basic" label="Ful name" variant="outlined" />  
            </div>
            <div className='reginput'>
              <TextField type='password' id="outlined-basic" label="Password" variant="outlined" />  
            </div>
            <div className='regbutton'>
            <Button variant="contained">Sign up</Button>
            </div>
            
         </div>
        </Grid>
        <Grid item xs={6}>
          <img className = "regimg" src = { registrationimg }/>
        </Grid>
  </Grid>
  )
}

export default Resistration