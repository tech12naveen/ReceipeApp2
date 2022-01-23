//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Counter } from"./counter.js";
import { Food } from"./Food.js";
import{ Link , Switch, Route}from "react-router-dom";
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';




function App() {
  
  const [foods,setFoods]=useState([{  name:"Thalapakattu Biriyani",
poster:"https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=",
rating:"8.5",
trailer:"https://www.youtube.com/embed/TRw8lPKXofU",
summary:"There are various apocryphal stories dating the invention to Shah Jahan's time but Rana Safvi, the distinguished historian, says she could only find a recipe from the later Mughal period, from Bahadur Shah Zafar's time. It is not her claim that there was no biryani before that; just that she has not found a recipe. Other historians who have gone through texts say that the first references to biryani only appear around the 18th century.[22]",},
{
name:"Vegetable Rice",
poster:"https://thumbs.dreamstime.com/z/vegetable-biryani-popular-indian-veg-dish-made-vegetables-vegetales-basmati-rice-38455630.jpg",
rating:"9.5",
trailer:"https://www.youtube.com/embed/TRw8lPKXofU",
summary:"There are various apocryphal stories dating the invention to Shah Jahan's time but Rana Safvi, the distinguished historian, says she could only find a recipe from the later Mughal period, from Bahadur Shah Zafar's time. It is not her claim that there was no biryani before that; just that she has not found a recipe. Other historians who have gone through texts say that the first references to biryani only appear around the 18th century.[22]"}
,{
name:"Pizza",
poster:"https://media.istockphoto.com/photos/large-american-style-pepperoni-and-cheese-pizza-in-cardboard-delivery-picture-id1256339158?b=1&k=20&m=1256339158&s=170667a&w=0&h=XFNxZmudE_SZqqz3-nrIM6dCvvfuxU8xrvDLYkFHFAg=",
rating:"9.6",
trailer:"https://www.youtube.com/embed/TRw8lPKXofU",
summary:"There are various apocryphal stories dating the invention to Shah Jahan's time but Rana Safvi, the distinguished historian, says she could only find a recipe from the later Mughal period, from Bahadur Shah Zafar's time. It is not her claim that there was no biryani before that; just that she has not found a recipe. Other historians who have gone through texts say that the first references to biryani only appear around the 18th century.[22]",
},
{
name:"sandwich",
poster:"https://media.istockphoto.com/photos/closeup-photo-of-a-club-sandwich-sandwich-with-meat-prosciutto-salami-picture-id1154590261?k=20&m=1154590261&s=612x612&w=0&h=2Ij8LKAdqKmsy5sZCkjngvK1SQbmUDuShmyxQfrPIZs=",
rating:"8.5",
trailer:"https://www.youtube.com/embed/TRw8lPKXofU",
summary:"There are various apocryphal stories dating the invention to Shah Jahan's time but Rana Safvi, the distinguished historian, says she could only find a recipe from the later Mughal period, from Bahadur Shah Zafar's time. It is not her claim that there was no biryani before that; just that she has not found a recipe. Other historians who have gone through texts say that the first references to biryani only appear around the 18th century.[22]",}
,
]);

const [name,  SetName]=useState("");
const [rating,  SetRating]=useState("");
const [summary,  SetSummary]=useState("");
const [poster,  SetPoster]=useState("");
const addMovie= ()=>{
  console.log(name , summary,rating ,poster);
    const newmovie={
      name:name,
     summary:summary,
     poster:poster,
      rating:rating
};
setFoods([...foods,newmovie]);
    }
    const [mode, setMode]= useState("light")
 const theme = createTheme({

    palette:{
      mode:mode,

    },
 });
 
  const paperStyles={borderRadius:0, minHeight:"100vh"};
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Paper elevation={4} styles ={paperStyles}>
       <AppBar position="static">
        <Toolbar>
          <Button onClick={() => History.push("?")}
            size="large"
            color="inherit"
            aria-label="home">
            
        <Link to="/">Home</Link>
        
          </Button>   
          <Button
            size="large"
            color="inherit"
            aria-label="home">
            <Link to="/movies"> Receipes</Link>
          </Button> 
          <Button
            size="large"
            color="inherit"
            aria-label="home">
            <Link to="/color-games">Color Games</Link>
          </Button>
          <Button
           style ={{marginLeft:"auto"}}
            size="large"
            color="inherit"
            aria-label="home"
            startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
             onClick ={() =>
             setMode(mode==="light" ? "dark" : "light")}>
             {mode==="light" ? "dark" : "light"} Mode
          </Button>     
        </Toolbar>
       </AppBar>

       <Switch>
       <Route exact path="/">
          <Welcome/>
        </Route>
        <Route path="/movies">
          <div className="add-movie-form">
      <TextField   onChange={(event)=>{SetName(event.target.value)}} placeholder="Enter a Receipe Name name"/> 
      <TextField  onChange={(event)=>{SetRating(event.target.value)}} placeholder="Enter a Receipe  rating"/>
      <TextField  onChange={(event)=>{SetSummary(event.target.value)}} placeholder="Enter a Receipe summary"/>
      <TextField  onChange={(event)=>{SetPoster(event.target.value)}} placeholder="Enter a Receipe url "/>  
      <button variant ="contained" onClick={addMovie}>Add a Receipe</button>
          </div>
        

      <header className="App-header">
        <section className="food-list"> 
        {foods.map(({name,poster,rating,summary},index )=>(
        <Food
         name={name}
         poster={poster}
         rating={rating}
         summary={summary}
         index={index}
         deleteButton={<button 
         onClick={() =>{
           console.log(index);
           
         }}
         >delete</button>}
         />
        ))}</section>
          </header>
          <ColorBox/>
        </Route>
        <Route path="/color-games">
          <Addcolor/>
          <ColorBox/>
        </Route>

       <Route path="**">
         <Notfound/>

         </Route> 
         <Route path="/add-foods">
           <Addreceipe foods={foods} setFoods={setFoods}/>
           </Route>     
      </Switch>
      </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;

function ColorBox(){
  const [color, setColor]=useState("")
  const styles={backgroundColor:color};
  
  return(
    <div>
      
      <input  style={styles}  onChange ={(event)=>setColor(event.target.value)}
      placeholder='Enter a color'/>
      <button> See Color</button>
      <Addcolor/>
  
      
      
    </div>
  )
}

function Addcolor(){
  const styles={backgroundColor:"pink", height:"50px",
width:"200px", };
  return<div style={styles}></div>
}
  
function Welcome(){
return <h1>Welcome to the Food receipe site,here you can like and dislike the receipes. </h1>
       
}

 
  function Notfound()
  {
    return <img
     src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt=""/>
  }


  function Addreceipe({foods,SetFoods }){
    const [name,  SetName]=useState("");
const [rating,  SetRating]=useState("");
const [summary,  SetSummary]=useState("");
const [poster,  SetPoster]=useState("");

const addMovie= ()=>{
  console.log(name , summary,rating ,poster);
    const newmovie={
      name:name,
     summary:summary,
     poster:poster,
      rating:rating
};
 }
    return (
    <div className="add-movie-form">
    <TextField   onChange={(event)=>{SetName(event.target.value)}} placeholder="Enter a Receipe Name name"/> 
     <TextField  onChange={(event)=>{SetRating(event.target.value)}} placeholder="Enter a Receipe  rating"/>
     <TextField  onChange={(event)=>{SetSummary(event.target.value)}} placeholder="Enter a Receipe summary"/>
     <TextField  onChange={(event)=>{SetPoster(event.target.value)}} placeholder="Enter a Receipe url "/>  
     <button variant ="contained" onClick={addMovie}>Add a Receipe</button>
           </div>
    )}