import { Counter } from"./counter";
import { useState} from"react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActionArea } from '@mui/material';
export function Food({name,poster,rating,summary,index,deleteButton}){
    const [show,setShow]=useState(true);
    const styles={display:show ? "block" :"none"};

    return (
    <div>
      
          <Card className="food-container">
      
      <CardContent>
        <CardActionArea>
      <img className="food-poster" src={poster} alt=""/>
      <div className="food-specs">
        <h3 className="food-name"> {name}</h3>
      <p className="food-rating"> {rating}</p>
      </div>
      <IconButton onClick={()=>setShow(!show)} style ={{marginBottom:"10px"}}>{show ? <ExpandLessIcon/> : <ExpandMoreIcon/>} </IconButton>
      <p style={styles}>{summary}</p>
      <Counter/>
      
      </CardActionArea>
      </CardContent>
   
    </Card>;
    </div>

    )}