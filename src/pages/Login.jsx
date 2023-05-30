import React from 'react'
import { Grid, TextField, Button} from '@mui/material'
import loginimg from '../assets/loginimg.jpg'
import Google from '../assets/Google.png'
import Headingforreglog from '../components/headingforreglog'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';


let innitialvalue = {
  email:"",
  password:"",
  loading: false
}

const Login = () => {

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  let [values, setValues] = useState(innitialvalue)

  let handleValues = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    
  }


  let handlaeSubmit = ()=>{

    let {email,password,fullname} = values
  
    setValues({
      ...values,
      loading: true
    })
  
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      setValues({
        email:"",
         password:"",
        loading: false
      })
      console.log(user)
    })
    
    
  }


let handleGoogle = () =>{
  signInWithPopup(auth, provider).then((result)=>{

    console.log(result)

  })

}

  

  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regcontainer'>
            <Headingforreglog className = "headingreglog" title = "Login to your account!"/>
            <img onClick={handleGoogle} className = "google" src={Google}></img>
            
            <div className='reginput'>
              <TextField value={values.email} onChange={handleValues} name = "email" type='email' id="outlined-basic" label="Email Address" variant="outlined" />  
            </div>
            
            <div className='reginput'>
              <TextField value={values.password} onChange={handleValues} name = "password" type='password' id="outlined-basic" label="Password" variant="outlined" />  
            </div>
            <div className='regbutton'>


            {values.loading
                  ?
                      <LoadingButton loading variant="outlined">
                      Submit
                    </LoadingButton>
                  :
                  <Button onClick={handlaeSubmit} variant="contained">Login to Continue</Button>
                }


           
            </div>
            
         </div>
        </Grid>
        <Grid item xs={6}>

          <img className = "logimg" src={loginimg}></img>
          
        </Grid>
  </Grid>
  )
}

export default Login