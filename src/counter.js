import { useState} from"react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
 export function Counter(){
    const [like,setLike]= useState(0);
    const [dislike,setdisLike]= useState(0);
    return(
    <div className="counter-container">
      <IconButton aria-label="delete">
      <DeleteIcon />
     </IconButton>
      <button onClick={()=>setLike(like+1)} >like</button>
      <p>{like}</p>
      <button onClick={()=>setdisLike(like+1)} >disLike</button>
      <p>{dislike}</p>
    </div>
    );
  }