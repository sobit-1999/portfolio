import { Card, Typography } from '@mui/material'
import React from 'react'


export default function Home2({img, name, i}) {
  return (
   <Card 
   sx={{
     backgroundColor: 'rgb(55, 45, 35)', 
     marginX: -i,   
      position: "relative",
     textAlign: 'center', 
     marginY: 4,
     border: ' none' ,
      transform: `Skew(${i}deg, ${i*10}deg)`,
     "&:hover": {
      transition: '5s',
      animationName: "Hover",
      animationDuration: '4s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate', 
      animationDelay:i/3+'s',
     },
    
     "@keyframes Hover": {
        '50%': {
        transform: 'Skew(0deg, 0deg)',
        marginX: i
      }
    },
      "@media (min-width: 960px)": {
 
    }
    
   }}
   > <Card 
    // className='yonalishlar'  
    sx={{ 
      // backgroundColor: 'rgb(55, 45, 35)', 
      margin: '4px',
      boxShadow: '10px 5px 8px 5px  rgb(0, 15, 5)', 
        // maxWidth: 345, 
        }} 
        
        id='Home'>
       <img width='180px' height='180px' style={{padding:'20px'}} src={img}/>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
    </Card>
    </Card>
  )
}
