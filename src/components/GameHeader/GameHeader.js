import React from 'react';
import classes from './GameHeader.module.css'


const gameHeader = (props) => {
    return (
        <div className={classes.gameHeader}>
            <div>{props.minesLeft}</div>
            <div onClick={props.doubleClicked}> {props.children}</div>
            <div>{props.time}</div>
        </div>
    );
}

export default gameHeader;