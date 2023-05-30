import React from 'react'
import { Grid, TextField, Button} from '@mui/material'
import registrationimg from '../assets/registrationimg.png'
import Headingforreglog from '../components/headingforreglog'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom'


let innitialvalue = {
  email:"",
  fullname:"",
  password:"",
  loading: false
}

const Resistration = () => {

  const auth = getAuth();

  let navigate = useNavigate()

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

  createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {

    sendEmailVerification(auth.currentUser).then(()=>{
      console.log("Email gase")
    })

    console.log(user)
    setValues({
      email:"",
      fullname:"",
       password:"",
      loading: false
    })
    // navigate("/login")
  })
  
  
}


  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regcontainer'>
            <Headingforreglog className = "headingreglog" title = "Get started with easily register"/>
            <p className='regpara'>Free register and you can enjoy it</p>
            <div className='reginput'>
              <TextField value={values.email} onChange={handleValues} name = "email"  id="outlined-basic" label="Email Address" variant="outlined" />  
            </div>
            <div className='reginput'>
              <TextField value={values.fullname} onChange={handleValues} name = "fullname" type='text' id="outlined-basic" label="Ful name" variant="outlined" />  
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
                    <Button onClick={handlaeSubmit} variant="contained">Sign up</Button>
                }

           
           
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