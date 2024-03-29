import {useState} from 'react'
import profile from "../assets/profile.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { getDatabase, ref, set,push } from "firebase/database";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


let groupData = {
    groupname: "",
    grouptagline: "",
    total: ""
}

const Group = () => {

    const db = getDatabase();

    let userData = useSelector((state)=> state.loggedUser.loginUser)

   

    let [groupInfo,setGroupInfo] = useState(groupData)
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handleChange = (e)=>{

  
    
    setGroupInfo({
        ...groupInfo,
        [e.target.name]: e.target.value,
    })

  }

  let handleSubmit = ()=>{
    
    
    set(push(ref(db, 'groups/')), {
      groupname: groupInfo.groupname,
      grouptagline: groupInfo.grouptagline,
      adminid: userData.uid,
      adminname: userData.displayName
    }).then(()=>{
        setOpen(false)
    })



  }



  return (
    <div className='box'>
        <h3 className='title'>Group List
            <Button size="small" variant="contained" onClick={handleOpen}>Create Group</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Your Group
                </Typography>
                <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField onChange={handleChange} name='groupname'  margin="dense" id="outlined-basic" label="Group Name" variant="outlined" />
                    <TextField onChange={handleChange}  name="grouptagline" margin="dense" id="outlined-basic" label="Group Tagline" variant="outlined" />
                <br/>
                <Button onClick={handleSubmit} variant="contained" margin="dense">Contained</Button>
                </Typography>
                </Box>
            </Modal>

        </h3>
        
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
        <div className="list">
            <div className="img">
                <img src={profile}/>
            </div>
            <div className="details">
                <h4>Friends Reunion</h4>
                <p>Hi Guys, Wassup!</p>
            </div>
            <div className="button">
            <Button size="small" variant="contained">Join</Button>
            </div> 
        </div>
    </div>
  )
}

export default Group