import * as React from 'react';
import Card from '@mui/material/Card';
import Kalkulyator from '../img/kalkulyator.png'
import LotinKiril from '../img/lotin-kiril.svg'
import Restaran from '../img/restaran.svg'
import Shop from '../img/shop.svg'
import Chat from '../img/chat.png'
import Valuta from '../img/valyuta.svg'
import Project from './Project';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useSelector } from 'react-redux'


export default function ActionAreaCard() {
  
  const translateShow = useSelector((state) => state.style.translateShow)

  React.useEffect(() => {
    AOS.init({ 
      duration: 2000,
    });
  }, []);

  return (<> <h1 style={{textAlign:'center'}}
  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
  >{translateShow?'Pragects':'Amaliyotlar'}</h1>
  <div
     className='projects'>{itemData.map((item, i) => {
  return <Card  key={i}
       data-aos={i%2===0? "fade-up":"fade-down"
      }
       data-aos-easing="linear"
       data-aos-duration="2000"
       sx={{
    
    margin:5,
    background: 'rgb(45, 38, 38)' ,
    color: 'aliceblue'
   }}
  
  > <Card
    sx={{
     margin:'4px',
     boxShadow: ' 3px 4px 4px 4px rgb(10, 50, 85)',
     textAlign: 'center',
    }}>
      <Project  item={item} i={i} />
    </Card>
    </Card>
        })}
    </div>
    </>
  );
}

const itemData = [
  {
    img: Kalkulyator,
    title: 'Kalkulyator',
    link_github: 'https://github.com/sobit-1999/kalkulyator_app.git',
    link_code:'https://codesandbox.io/s/github/sobit-1999/kalkulyator_app',
    demo:'https://stj42r.csb.app/'
  },
  {
    img: Restaran,
    title: 'Restaran',
    link_github: 'https://github.com/sobit-1999/my-restaurant_app',
    link_code: 'https://codesandbox.io/s/github/sobit-1999/my-restaurant_app',
    demo:'https://i6sw4c.csb.app/'
  },
  {
    img: LotinKiril,
    title: 'Lotin Kiril',
    link_github: 'https://github.com/sobit-1999/lotin_kiril.git',
    link_code: 'https://codesandbox.io/s/github/sobit-1999/lotin_kiril',
    demo:'https://ufkj7p.csb.app/'
  },
  {
    img: Shop,
    title: 'My Shop',
    link_github: '',
    link_code:'',
    demo:''
  },
  {
    img: Chat,
    title: 'Chat',
    link_github: '',
    link_code:'',
    demo:''
  },
  {
    img: Valuta,
    title: 'Valuta',
    link_github: '',
    link_code:'',
    demo:''
  }
];
