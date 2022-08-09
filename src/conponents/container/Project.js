import { CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export default function Project({item, i}) {
  const [yes, setYes] = useState(true)
  const open = () => {
    setYes(false)
  }
  const openNo = () => {
    setYes(true)
  }
  return (
<CardActionArea 
onMouseOver={open} onMouseOut={openNo}
sx={{
  padding: '30px 30px 0 30px',
  transition: '3s',
  "&:hover":{
  transform: 'scale(1.1,1.1)',
  }
        
      }}
      >
        <CardMedia
          component="img"
          height="200"
          image={item.img}
          alt="green iguana"
          />
       <CardContent>{yes? 
          <Typography 
          sx={{
            fontFamily:'cursive'
          }}
          gutterBottom variant="h4"
           component="div">
            {item.title}
          </Typography>:
          <Typography
          gutterBottom variant="h5"
          component="div" >
         <a href={item.link_github}> <IconButton sx={{color: 'green', "&:hover":{background:'green', color:'black'}}}><GitHubIcon /></IconButton></a>
         <a href={item.link_code}><IconButton sx={{color: 'green', "&:hover":{background:'green', color:'black'}}}><CodeIcon /></IconButton></a>
         <a href={item.demo}><IconButton sx={{fontFamily:'cursive',color: 'green', "&:hover":{ borderRadius:'15px',background:'green', color:'black'}}}>Demo</IconButton></a>  
          </Typography> 
          } 
        </CardContent>
      </CardActionArea>
  )
}
