import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Fantasycom.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment className="flex">
        <Grid item xs={4}>
          <Paper className={classes.paper}>FantasyTeams1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>600</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>500</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>5Players</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>6Players</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
       {/*  <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}> */}
        
          
        {/* </Grid> */}
      </Grid>
    </div>
  );
}