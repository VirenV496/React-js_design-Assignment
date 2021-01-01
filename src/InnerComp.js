import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


import  './Inner.css';

 import Cards from './Card' 

 const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 950,
    height: 800,
  },



})); 



export default function InnerComp() {
  const classes = useStyles();
  
  return (

      <Card className={classes.root}>

                < CardContent className="contain" >
                <h1 className="HeadProp">Predicted Playing 11 </h1>
                <div className ="main" >

                <Cards />
                <Cards />
                <Cards />

             
               {/*  <Fantasycom />
              */}
                </div>


                   <div className="cardDowntxt"> 


                   <h2 className="greenclr">Selected in Match:</h2>
                
                   <h2 className=" Pre">10 out of Predicted 11</h2>

                   </div>
                            <div className="cardlast"> 


                                <h1 className="blueclr">Winning Predictions</h1>

                           
                                </div>


                                <div className="last">        
                                    <h2 >Predicted:</h2>
                                    <h2 className="lastcolor1">India</h2>

                                    <h2 >Winner:</h2>
                                    <h2 className="lastcolor2">India</h2>
                                </div>



                        

                        

    </CardContent>





    

    </Card>



  );
}

