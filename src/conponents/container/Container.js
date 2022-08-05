import React, { useEffect } from 'react'
import pr from '../img/programmer.svg'
import './Container.css';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-scroll';
import CallIcon from '@mui/icons-material/Call';
import { Box } from '@mui/system';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Contanier() {
  const translateShow = useSelector((state) => state.style.translateShow);
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
    });
  }, [])
  return (
    <div className='container' id={translateShow?'Home':'Asosiy'}>
     <div className='name'>
      <h1   
      data-aos="zoom-in-right"
      >Sobit Tolliboyev</h1>
     {translateShow ? <><h2>Front-end developer.
   </h2>
    </>: <h2>Front-end dasturchi.
   </h2>}
   <Box
   sx={{
    display: 'flex',
    marginTop: 5,
   }}
   ><CallIcon sx={{marginRight:2}} /> <h6>+998999994827</h6></Box> 
      <Box
   sx={{
    display: 'flex',
   }}
   ><AlternateEmailIcon sx={{marginRight:2}} /> <h6>yusufvichsobit@gmail.com</h6></Box> 
   
   <Link to={translateShow?'Contact':'Aloqa' }  spy="true" smooth="true"><Button  sx={{
     backgroundColor: 'rgb(55, 45, 35)', 
     padding:2,
     marginY:2,
     borderRadius:5,
     color: 'blue',
     marginRight:5
     }}>{translateShow?'Contact':'Aloqa' }  {<ArrowForwardIcon sx={{marginX:2}}/>}
     </Button>
     </Link>
     
 <a href='https:/www.canva.com/design/DAFIfozyMT8/XSJGPGo2SRa8l2zRMzitiQ/view?utm_content=DAFIfozyMT8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'><Button  sx={{
     backgroundColor: 'rgb(55, 45, 35)', 
     padding:2,
    //  marginX:5,
     borderRadius:5,
     color:'blue'
     }}>{translateShow?'Resume':'Malumot' }  {<ArrowForwardIcon  sx={{marginX:2}}/>}
     </Button>
     </a>
      </div > 
        <img src={pr} className='img-card'/>
    </div>
  )
}
