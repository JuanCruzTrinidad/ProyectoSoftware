import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '31ch',
    },
  },
}));

export default function Search({search, setsearch}) {
  const classes = useStyles();


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Buscar" 
        onChange={e => setsearch(e.target.value)}
      />
    </form>
  );
}