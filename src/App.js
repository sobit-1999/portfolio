import './App.css';
import Header from './conponents/header/Header';
import Container from './conponents/container/Container';
import { Provider } from 'react-redux';
import store from './conponents/redux/store';
import About from './conponents/container/About';
import Contact from './conponents/container/Contact';
import Projects from './conponents/container/Projects';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-scroll';
import { useState } from 'react';


function App() {
  const [to, setto] = useState(true)

  return (
    <Provider store={store}>
      <Header/>
      <h1>Hello Sobit</h1>
      <Container />
     <Link to={to?'Home':'Asosiy'} spy="true" smooth="true">
      <ArrowUpwardIcon className='scroll-top' 
     sx={{
      fontSize:50,
      borderRadius: 5
     }}
     /></Link> 
      <About  to={setto} />
      <Projects />
      <Contact />
    </Provider>
  );
}

export default App;
