import { useState } from "react";
import TextField from '@mui/material/TextField';
export function Addreceipe({foods,setFoods}){
    const [name,  SetName]=useState("");
const [rating,  SetRating]=useState("");
const [summary,  SetSummary]=useState("");
const [poster,  SetPoster]=useState("");
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
    return <div className="add-movie-form">
    <TextField   onChange={(event)=>{SetName(event.target.value)}} placeholder="Enter a Receipe Name name"/> 
     <TextField  onChange={(event)=>{SetRating(event.target.value)}} placeholder="Enter a Receipe  rating"/>
     <TextField  onChange={(event)=>{SetSummary(event.target.value)}} placeholder="Enter a Receipe summary"/>
     <TextField  onChange={(event)=>{SetPoster(event.target.value)}} placeholder="Enter a Receipe url "/>  
     <button variant ="contained" onClick={addMovie}>Add a Receipe</button>
           </div>
  }