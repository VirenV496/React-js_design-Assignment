import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SecondComp from './SecondComp';
import './Fantasycom.css'

 const useStyles = makeStyles(() => ({
  root: {
    Width: 900,
    height: 800,
  
  },


})); 



export default function InnerComp() {
  const classes = useStyles();
  
  return (
       
  
      <Card className={classes.root} >

         <div>
         <h1 className="fantasyteamcolor">Fantasy Teams </h1>

         <SecondComp />&nbsp;&nbsp;&nbsp;
         <SecondComp />&nbsp;&nbsp;&nbsp;
         
         <SecondComp />&nbsp;&nbsp;&nbsp;
         <SecondComp />&nbsp;&nbsp;&nbsp;
         
         <SecondComp />
         
         </div> 

    </Card>



  );
}

