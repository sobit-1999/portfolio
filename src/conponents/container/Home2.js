import { Card, Typography } from '@mui/material'
import React from 'react'


export default function Home2({img, name, i}) {
  const react = ['Redux Toolkit', 'React Router', 'MUI']
  return (
   <Card 
   sx={{
     backgroundColor: 'rgb(55, 45, 35)', 
     marginX: -i,   
      position: "relative",
     textAlign: 'center', 
     marginY: 4,
     border: ' none' ,
      transform: `Skew(${i*2}deg, ${i*10}deg)`,
     "&:hover": {
      transition: '2s',
      // animationName: "Hover",
      animationDuration: '2s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate', 
      animationDelay:i/3+'s',
      transform: 'Skew(0deg, 0deg) scale(1.3)',
      marginX: i*2,
      zIndex:2
      // transform: 'scale(0.8)'
     },
      "@media screen and (max-width: 700px)": {
       background:"black",
       margin:1,
       transform: `Skew(0deg, 0deg)`,
      }
      
    }}
    >
    {i===3?
     <Card 
    className='react-skills'  
    sx={{ 
      // backgroundColor: 'rgb(55, 45, 35)', 
      margin: '4px',
      boxShadow: '10px 5px 8px 5px  rgb(0, 15, 5)', 
        // maxWidth: 345, 
        }} 
        
        id='Home'>
       <img className='image' width='180px' height='180px' style={{padding:'20px'}} src={img}/>
        <Typography  gutterBottom variant="h5" component="div"
        sx={{
          fontFamily:'cursive',}}
        >
          {name}
          <Card  className='react-helper'
          >{
                    react.map((item, i) => {return<Typography         sx={{
                      fontFamily:'cursive',}}
                     gutterBottom variant="h5" component="div">
                     {'< '+ item +' />'}
                      </Typography>})
                 }
                  </Card>
        </Typography>
    </Card>:
    <Card 
    // className='yonalishlar'  
    sx={{ 
      // backgroundColor: 'rgb(55, 45, 35)', 
      margin: '4px',
      boxShadow: '10px 5px 8px 5px  rgb(0, 15, 5)', 
        // maxWidth: 345, 
        }} 
        
        id='Home'>
       <img width='180px' height='180px' style={{padding:'20px'}} src={img}/>
        <Typography gutterBottom variant="h5" component="div"        sx={{
          fontFamily:'cursive',}}
        >
          {name}
        </Typography>
    </Card>
          }
    </Card>
  )
}
