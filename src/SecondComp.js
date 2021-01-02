import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SecondCom.css'
import { colors, Container } from '@material-ui/core';
import { Card }from '@material-ui/core'
import {Typography} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    maxwidth: '100%',
    height:100,
    
    
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();


  return (
    <Card  className={classes.root} >
   {/*  <List className={classes.root} "> */}
    
   <List className ="listt">


   <ListItem>  
        <ListItemText  
         primary={
            <Typography className="fan" > <strong>FantasyTeams1</strong></Typography>
          }

          />
          
      </ListItem>

      <ListItem>  
        <ListItemText  
         primary={
            <Typography style={{ color: 'Bold' }}> <strong>600</strong></Typography>
          }

          secondary={
            <Typography style={{ color: "green" }}>Predicted</Typography>
          }
         />

      </ListItem>
        
       
      <ListItem>  
        <ListItemText  
         primary={
            <Typography > <strong>600</strong></Typography>
          }

          secondary={
            <Typography style={{ color: "green" }}>Scored</Typography>
          }
         />

      </ListItem>


       
      <ListItem>  
        <ListItemText  
         primary={
            <Typography > <strong>600</strong></Typography>
          }

          secondary={
            <Typography style={{ color: "green" }}>Team A</Typography>
          }
         />

      </ListItem>

   
      <ListItem>  
        <ListItemText  
         primary={
            <Typography > <strong>600</strong></Typography>
          }

          secondary={
            <Typography style={{ color: "green" }}>Team B</Typography>
          }
         />

      </ListItem>






   
     
  </List> 

    </Card>
  );
}