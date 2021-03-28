<<<<<<< HEAD
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

=======
import React from 'react';
import classes from './GameHeader.module.css'


const gameHeader = (props) => {



    return (
        <div className={classes.gameHeader}>
            <div>{props.minesLeft}</div>
            <div onClick={props.clicked}> {props.children}</div>
            <div>{props.time}</div>
        </div>
    );
}

>>>>>>> master
export default gameHeader;