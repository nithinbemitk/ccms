
import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function StatusList() {
    const classes = useStyles();

    const words = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const items = words.map((word, idx) =>
        //<ListItem class="list-group-item list-group-item-primary" key={idx}> Status item is {word}</ListItem>
        <tr key={idx} >
               <td>Status</td>
               <td>{word}</td>
            </tr>
    );
    return (
        <div >
            <h3>StatusList</h3>
            {/* 
            <List className={classes.root}>{items}</List> 
            */}

            <table id='numbers'>
               <tbody>
                  {items}
               </tbody>
            </table>
        </div>
    );
}

export default StatusList;
