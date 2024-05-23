import {React,useState} from 'react'
import Rating from '@mui/material/Rating';

export const Rate=()=>{
const [value,setValue]=useState(1);
const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
         <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={handleChange}
            
        />
    </div>
  )
}
