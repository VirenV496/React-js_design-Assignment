import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Card.css';

 const useStyles = makeStyles(() => ({
  root: {

    maxWidth: '50%',
    height:'20',
    
 
  },



})); 



export default function RecipeReviewCard() {
  const classes = useStyles();
  
  return (

    
      <Card className={classes.root} >
    


    <Card >
    

       <CardContent   className="HeaderName"  >

          
          <div className ="viratindia">

          <h1>Virat <br/> <span className="fontt">Kohli</span> </h1>
       

           <h4 className="India">India</h4>
              </div>

                <div className="kohli1">
                  
                  </div>

            
         </CardContent>
     
      
    
      <CardContent  className="MiddleCards"   >
        <div style={{display: 'flex' }}  >
          <h3  style ={{color:'white'}}> ICCRank </h3>
          <h3  > <strong className=" st">1st</strong> </h3> 
              </div>

              
              <div style={{display: 'flex' }}>

              <h3  style ={{color:'white'}}> Matches </h3>
              <h3 className="st2"> 500</h3>

                </div>

                
              <div style={{display: 'flex' }}>
              <h3  style ={{color:'white'}}> Innings </h3>
              <h3 className="st3">496 </h3>

                </div>

                
              <div style={{display: 'flex' }}>
              <h3  style ={{color:'white'}}> Runs </h3>
              <h3 className="st4" >200000</h3>

                </div>

                <div style={{display: 'flex' }}>
                  <h3  style ={{color:'white'}}> 50/100s </h3>
                  <h3 className="st5">43/48</h3>

                </div>
                
      
      </CardContent>

   </Card>

   
</Card>


  );
}

