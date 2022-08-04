import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import "aos/dist/aos.css";
import Aos from 'aos';

export default function Contact() {
  const translateShow = useSelector((state) => state.style.translateShow)
const call = [
 {name: TelegramIcon, link: 'https://t.me/sobit_tolliboyev'},
  {name: InstagramIcon, link: ''},
  {name: GitHubIcon, link: 'https://github.com/sobit-1999'}
]

useEffect(() => {
  Aos.init({ 
  });
}, []);
  return (
    <div className='contact' id={translateShow? 'Contact' : 'Aloqa'} >
      <h1
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      >{translateShow?"Contact":'Aloqa'}</h1>
      <Box >
         {call.map((Item, i)=> {return  (
         <IconButton 
         key={i}
         sx={{
          margin:2,
          transition: '2s',
          background:'black',
          "&: hover":{
            background:'green',
            transform: 'scale(1,1)',
          },
      }}>
      <a href={Item.link}><Item.name sx={{ fontSize: 40, color: 'aliceblue'  }}
        /></a>
        </IconButton>)})}
       </Box>
      </div>
  )
}
