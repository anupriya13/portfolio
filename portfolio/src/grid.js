import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
   
        <Grid item xs={12}>          
    
          <Item> <a href='https://anupriya13.github.io' target="_blank"><h1 style={{color:"black"}}>
          SDE Portfolio
   </h1></a>
   </Item>
 
        </Grid>
      
      
        <Grid item xs={12}>          
    
          <Item> <a href='https://anupriyaverma13.wixsite.com/graphic-designs' target="_blank"><h1 style={{color:"black"}}>
          Graphic Designs Portfolio
   </h1></a>
   </Item>
 
        </Grid>
        
        <Grid item xs={12}><a href='https://linktr.ee/anupriyaverma' target="_blank">
          <Item> <h1 style={{color:"black"}}>
          Social Links
   </h1></Item></a>
        </Grid>
        <Grid item xs={12}>
          <Item> <h1 style={{color:"black"}}>
          My Services
   </h1></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><a href='https://calendly.com/anupriyaverma13/one-to-one-session' target="_blank"> <h1 style={{color:"black"}}>
     Book a session with me!
   </h1></a></Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}
