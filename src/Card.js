import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './Card.css';




 const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 250,
    height:470,
  },


})); 



export default function RecipeReviewCard() {
  const classes = useStyles();
  
  return (
      <Card className={classes.root}>


        <Card className="gap">

       <CardContent   className="HeaderName"  >

          
          <div className ="viratindia">

          <h1>Virat  </h1>

           <h4 className="India">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India</h4>
              </div>

                <div classNam="kohli1">
                <h1 className="Kohli">Kohli</h1>
              </div>

            
         </CardContent>
     
      
    
      <CardContent  className="MiddleCards"   >
        <div style={{display: 'flex' }}  >
          <h3  style ={{color:'white'}}> ICCRank </h3>
          <h3 style ={{color:"green"}} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1st</h3> 
              </div>

              
              <div style={{display: 'flex' }}>

              <h3  style ={{color:'white'}}> Matches </h3>
              <h3 style ={{color:"green"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 500</h3>

                </div>

                
              <div style={{display: 'flex' }}>
              <h3  style ={{color:'white'}}> Innings </h3>
              <h3 style ={{color:"green"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;496 </h3>

                </div>

                
              <div style={{display: 'flex' }}>
              <h3  style ={{color:'white'}}> Runs </h3>
              <h3 style ={{color:"green"}} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200000</h3>

                </div>

                <div style={{display: 'flex' }}>
                  <h3  style ={{color:'white'}}> 50/100s </h3>
                  <h3 style ={{color:"green"}} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43/48</h3>

                </div>
                
      
      </CardContent>

   </Card>

   
</Card>

  );
}

