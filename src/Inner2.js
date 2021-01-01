import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Fantasycom from './Fantasycom'



 const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 2000,
    height: 800,
  },



})); 



export default function InnerComp() {
  const classes = useStyles();
  
  return (

      <Card className={classes.root}>
          

          <h1>Fantasy Teams</h1>

       
        
         
         <div>
             

         


         </div>
         


         </Card>


              
                        

    

);
}