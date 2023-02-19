import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';

export default function Main() {


     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [data, setData] = useState([])

     const addData = () => {
          setData([...data, { name, email }])
          setName("")
          setEmail("")
     }

     const removeList = (index) => {
          let arr = data
          arr.splice(index, 1)
          setData([...arr])
     }

     return (
          <div className='main-page'>
               <div className='butts'>
                    <TextField className='text'
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         id="outlined-basic"
                         label="name"
                         variant="outlined" />
                    <TextField className='text'
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         id="outlined-basic"
                         label="email"
                         variant="outlined" />
               </div>
               <Button onClick={addData} color='success' variant="contained" ><AddRoundedIcon /></Button>

               {data.map((e, index) => {
                    return (
                         <div key={index} className="child-el">
                              <p className='smoll-child-sl'>{index}</p>
                              <p className='smoll-child'>{e.name}</p>
                              <p className='smoll-child'>{e.email}</p>
                              <Button variant="contained" color="error" className="smoll-butt" onClick={() => removeList(index)}>
                                   <DeleteIcon />
                              </Button>
                         </div>
                    )
               })
               }
          </div>
     )
}