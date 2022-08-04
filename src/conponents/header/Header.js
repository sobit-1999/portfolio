
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { translateShowFunc } from '../redux/style/styleSlice';
import { Avatar } from '@mui/material';
import { Link } from 'react-scroll';
import HeaderName from '../container/HeaderName';


const drawerWidth = 340;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const translateIcon = useSelector((state) => state.style.translateIcon)
  const translateShow = useSelector((state) => state.style.translateShow)
  const dispatch = useDispatch();
  const [buttons, setButtons] = React.useState(true)
  // console.log(translate);
  const navItems = translateShow? ['Home', 'About', 'Contact'] :['Asosiy', 'Men Haqimda', 'Aloqa'];
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        yu.uz
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            <Link to={item}  spy="true" smooth="true" >
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
            </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const headerName = ['y', 'u', '.', 'u', 'z']
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{
        background:"aliceblue", 
        borderRadius: '0 0 170% 40%', 
        padding: '2px 20% 2px 2%', 
        paddingY: 1,
        // marginX: 5
        
      }}>
        <Toolbar>
          
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >{headerName.map((item, i) => {
            return <HeaderName name={item} i={i}/>
          })}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, 
          justifyContent:'center', 
          alignItems:'center' }}>
            {navItems.map((item, i) => (
              <Link key={i} to={item}   spy="true" smooth="true">
              <Button 
               sx={{
              background: i===0&& buttons?'green':'none',
               color:'black', 
               fontSize: 20,
               transition: '2s',
               borderRadius: 5,
               paddingX: 2,
               fontFamily:'cursive',
               "&:hover":{
                background: 'green',
                transform: 'scale(1.1,1.1)',
                marginX:1
              }
              }} 
               onMouseOver={() => setButtons(false)} onMouseOut={() => setButtons(true)}
               >
              
                {item}
              </Button>
              </Link>
            ))}
           {translateShow ?<>
           <Typography
           sx={{color: 'orange'}}
           >
            {translateIcon[0].name}
            </Typography>
           <IconButton onClick={(e) => dispatch(translateShowFunc())} >
            <Avatar 
            src={translateIcon[0].icon} 
            sx={{width:30, height:30}}
            />
            </IconButton> </>:<>
            <Typography
           sx={{color: 'orange',marginLeft: '2px'}}>
            {translateIcon[1].name}
            </Typography>
            <IconButton 
            onClick={(e) => dispatch(translateShowFunc())}>
            <Avatar src={translateIcon[1].icon}    
            sx={{width:30, height:30}}
             />
            </IconButton>
            </>
          }
           
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

