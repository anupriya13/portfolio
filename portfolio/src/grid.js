import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ii from './images/ii.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

  

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginLeft: '15%',
  marginRight: '15%',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
 // 'rgba(0, 0, 255, 0.4) 5px 5px, rgba(0, 0, 255, 0.3) 10px 10px, rgba(0, 0, 255, 0.2) 15px 15px, rgba(0, 0, 255, 0.1) 20px 20px, rgba(0, 0, 255, 0.05) 25px 25px'
}));

export default function VariableWidthGrid() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
   
        <Grid item xs={12}>          
    
          <Item> <a href='https://anupriya13.github.io' target="_blank"><h1 style={{color:"black"}}>
          SDE Portfolio
   </h1></a>
   </Item>
 
        </Grid>
      
      
        
        <Grid item xs={12}><a href='https://linktr.ee/anupriyaverma' target="_blank">
          <Item> <h1 style={{color:"black"}}>
          Social Links
   </h1></Item></a>
        </Grid>
      
        <Grid item xs={12}>
          <Item><a href='https://calendly.com/anupriyaverma13/one-to-one-session' target="_blank"> <h1 style={{color:"black"}}>
     Book a session with me!
   </h1></a></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>  <Button variant="text" onClick={handleClickOpen}>
          <h1 style={{color:"black", textDecoration:"underline"}}> My Services</h1>
     </Button></Item>
        </Grid>
      </Grid>
    </Box>
      
     <Dialog
       fullScreen
       open={open}
       onClose={handleClose}
       TransitionComponent={Transition}
     >
       <AppBar sx={{ position: 'relative' }} >
         <Toolbar>
           <IconButton
             edge="start"
             color="inherit"
             onClick={handleClose}
             aria-label="close"
           >
             <CloseIcon />
           </IconButton>
           <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             My Services
           </Typography>
           <Button autoFocus color="inherit" onClick={handleClose}>
             close
           </Button>
         </Toolbar>
       </AppBar>
       <List>
       
         <ListItem button >
         <a href="mailto:anupriyaverma13@gmail.com" style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>
           <ListItemText primary="Weekly mentorship on DSA, programming, etc." secondary="Contact me to know more: anupriyaverma13@gmail.com" style={{textDecoration:'none'}} />
           </a> 
         </ListItem>
       
         <Divider />
     
         <ListItem button>
         <a href="mailto:anupriyaverma13@gmail.com" style={{textDecoration:'none', color:'black'}}>

           <ListItemText
             primary="Logos, Favicons, Brochures, Posters, Graphics or Web designing for your business or personal use."
             secondary="Contact me to know more: anupriyaverma13@gmail.com"
           />
            </a> 
         </ListItem>
         
       </List>
      
       <img src={ii} alt="Logo" style={{height: "40%", width: "20%"}} />
      
     </Dialog>
     </div>
  );
}
/*

        <Grid item xs={12}>          
    
          <Item> <a href='https://anupriyaverma13.wixsite.com/graphic-designs' target="_blank"><h1 style={{color:"black"}}>
          Graphic Designs Portfolio
   </h1></a>
   </Item>
 
        </Grid>
        */