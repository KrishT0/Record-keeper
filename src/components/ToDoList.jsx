import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function ToDoList({ name, email, index}) {


     return (
          <div className="child-el">
               <p className='smoll-child-sl'>{index}</p>
               <p className='smoll-child'>{name}</p>
               <p className='smoll-child'>{email}</p>
               <Button variant="contained" color="error" className="smoll-butt">
                    <DeleteIcon />
               </Button>
          </div>
     )
}