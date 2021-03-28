<<<<<<< HEAD
import React from 'react';
import Square from './Square/Square'
import classes from './GameBoard.module.css'



const gameBoard = (props) => {

    let style = {
        gridTemplateColumns: `repeat(${props.width}, 1fr)`,
        gridTemplateRows: `repeat(${props.height}, 1fr)`,
        cursor: `${props.gameOver ? "default" : "pointer"}`,
        pointerEvents: `${props.gameOver ? "none" : "auto"}`,
    }

    let squares = []

    for (let i = 0; i < props.height * props.width; i++) {

        squares.push(<Square
            // pos={i}
            key={i}
            clicked={() => props.clicked(i)}
            right_clicked={(evt) => props.right_clicked(evt, i)}
            content={props.board[i].isOpen ? props.board[i].content : null}
            flagged={props.board[i].isFlagged}

        />)

    }



    return (
        <div
            className={classes.gameBoard}
            style={style}>
            {
                squares

            }

        </div>
    );
}

=======
import React from 'react';
import Square from './Square/Square'
import classes from './GameBoard.module.css'



const gameBoard = (props) => {

    let style = {
        gridTemplateColumns: `repeat(${props.width}, 1fr)`,
        gridTemplateRows: `repeat(${props.height}, 1fr)`,
        cursor: `${props.gameOver ? "default" : "pointer"}`,
        pointerEvents: `${props.gameOver ? "none" : "auto"}`,
    }

    let squares = []

    for (let i = 0; i < props.height * props.width; i++) {

        squares.push(<Square
            // pos={i}
            key={i}
            clicked={() => props.clicked(i)}
            right_clicked={(evt) => props.right_clicked(evt, i)}
            content={props.board[i].isOpen ? props.board[i].content : null}
            flagged={props.board[i].isFlagged}

        />)

    }



    return (
        <div
            className={classes.gameBoard}
            style={style}>
            {
                squares

            }

        </div>
    );
}

>>>>>>> master
export default gameBoard;