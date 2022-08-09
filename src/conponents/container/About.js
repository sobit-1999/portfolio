import { Card } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Redux from '../img/redux-toolkit.png'
import Home2 from './Home2'
import Html from '../img/html.png'
import Css from '../img/css.png'
import Js from '../img/js.jpg'
import ReactImg from '../img/react.png'
import Router from '../img/router.png'
import Aos from 'aos'


export default function About({to}) {
  const translateShow = useSelector((state) => state.style.translateShow)
  const imgName = [
    { img: Html, name: 'HTML'},
    { img: Css, name: 'CSS'}, 
    { img: Js, name: 'JS'},
    { img: ReactImg, name: 'React'},
  ]
  useEffect(() => {
    Aos.init({ 
    });
  }, []);
  to(translateShow)
  return (
      <Card 
      sx={{
        padding: "6%",
        background: 'black',
        color: 'aliceblue',
      }}
      id={translateShow? 'About':'Men Haqimda'}> 
      <h1 style={{textAlign:'center'}}
         data-aos="fade-right"
        data-aos-easing="ease-in-sine"
>{translateShow?'Skills':`Ko'nikmalar`}</h1>
        <div className='skills'>
      {imgName.map((item, i) => {return (
      <Home2 key={i} img={item.img} name= {item.name} i={i} />)
      })}
      </div>
      </Card>
  )
}
