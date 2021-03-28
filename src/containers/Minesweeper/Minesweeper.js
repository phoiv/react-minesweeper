import classes from './Minesweeper.module.css';
import GameHeader from '../../components/GameHeader/GameHeader.js'
import GameBoard from '../../components/GameBoard/GameBoard.js'
import Settings from '../../components/Settings/Settings.js'
import { useEffect, useState, useRef } from 'react';

<<<<<<< HEAD

function Minesweeper() {
    const [gameConfig, setGame] = useState({
=======
// const conf = {
//     beginner: [9, 9, 10],
//     intermediate: [16, 16, 40],
//     expert: [16, 30, 99],
//     custom: [null, null, null],
// }
const conf = {
    'beginner': { width: 9, height: 9, mines: 10 },
    'intermediate': { width: 16, height: 16, mines: 40 },
    'expert': { width: 16, height: 30, mines: 99 },
    'custom': [null, null, null],
}


function Minesweeper() {
    const [gameConfig, setConf] = useState({
>>>>>>> master
        width: 12,
        height: 10,
        mines: 10
    });
<<<<<<< HEAD
    const [board, setBoard] = useState(generateBoard(gameConfig.width, gameConfig.height, gameConfig.mines))
=======
    const [board, setBoard] = useState(() => generateBoard(gameConfig.width, gameConfig.height, gameConfig.mines))
>>>>>>> master
    const [gameState, setGameState] = useState("ready") //lost/won/ready/playing
    const [opened, setOpened] = useState(0)
    const [flagged, setFlagged] = useState(0)
    const [timer, setTimer] = useState(0)
    const [settingsOpen, setSettingsOpen] = useState(false);

    const minesweeperBoard = useRef(null);
    //the goal of the game is to open all non bombs squares
    const target = gameConfig.width * gameConfig.height - gameConfig.mines;
    console.log('target===', target)

    //we want to catch right click on the board and disable it
    useEffect(() => {
        minesweeperBoard.current.addEventListener("contextmenu", (evt) => flagHandler(evt, null))

    }, [])

    useEffect(() => {
        if (gameState === "running") {
            let id = setInterval(function () {
                setTimer(timer => timer + 1)
            }
                , 1000);
            return () => clearInterval(id)
        }
    }, [gameState])

    useEffect(() => {
        if (opened === target)
            gameWon()
    }, [opened])

    // useEffect(() => {
    //     console.log("hihi")
    //     const newBoard = generateBoard(gameConfig.width, gameConfig.height, gameConfig.mines);
    //     setBoard(newBoard)

    // }, [gameConfig])

    const flagHandler = (evt, tilePos) => {
        evt.preventDefault();
        console.log("RIGHT CLICKED", tilePos)
        //do nothing for rc on board
        if (!tilePos && tilePos != 0) return;
        if (board[tilePos].isOpen) return;
        if (gameState === 'won' || gameState === 'lost') return;
        if (board[tilePos].isFlagged) setFlagged(flagged => flagged - 1)
        if (!board[tilePos].isFlagged) setFlagged(flagged => flagged + 1)

        const newBoard = [...board];
        newBoard[tilePos].isFlagged = !newBoard[tilePos].isFlagged;
        setBoard(newBoard)
    }

    const revealTileHandler = (tilePos) => {
        if (board[tilePos].isFlagged) return;
        if (board[tilePos].content === -1) {
            gameLost(tilePos);
            return;
        }

        if (gameState === "ready") setGameState("running")
        if (gameState === 'won' || gameState === 'lost') return;

        const newBoard = [...board];
        newBoard[tilePos].isOpen = true;
        setBoard(newBoard)
        setOpened((opened) => opened + 1)
        if (newBoard[tilePos].content === 0)
            newBoard[tilePos].neighbours.forEach(tile => {
                if (!newBoard[tile].isOpen)
                    revealTileHandler(tile)
            })

        //check win condition

    }

    function gameLost(boom) {
<<<<<<< HEAD
=======

        //we use content -10 and -2 for extra styling options
        //-2 is thew bomb we opened and lost the game
        //-10 are the squares we had flagged as bombs but were safe
>>>>>>> master
        const newBoard = [...board];
        newBoard.forEach(tile => {
            if (tile.content === -1 && !tile.isFlagged)
                tile.isOpen = true;
            //flagged non-bomb
            if (tile.isFlagged && tile.content !== -1) {
                tile.isOpen = true;
                tile.isFlagged = false;
                tile.content = -10;
            }
        })
        newBoard[boom].content = -2
        setBoard(newBoard)
        setGameState("lost")
    }

    function gameWon() {
        const newBoard = [...board];
        newBoard.forEach(tile => {
            if (tile.content === -1)
                tile.isFlagged = true;
        })
        setBoard(newBoard)
        setGameState("won")
    }

<<<<<<< HEAD
=======
    let clicks = 0
    function handleClick() {
        if (settingsOpen) return
        clicks++
        if (clicks == 2) {
            clicks = 0
            openSettings()
        }
        setTimeout(function () {
            if (clicks == 1) {
                restart()
                clicks = 0
            }
        }, 150);
    }

    const restart = () => {
        const newBoard = generateBoard(gameConfig.width, gameConfig.height, gameConfig.mines);
        setBoard(newBoard)
        setGameState('ready')
        setOpened(0);
        setFlagged(0);
        setTimer(0)
    }
>>>>>>> master
    const openSettings = () => {
        console.log("open settings")
        setSettingsOpen(!settingsOpen)
    }

<<<<<<< HEAD
=======
    const closeSettings = () => {
        console.log("closing..")
        setSettingsOpen(!settingsOpen)
    }
>>>>>>> master
    // const onChangeValue = (evt) => {
    //     console.log(evt.target.value)
    // }

    const settingsChanged = (evt) => {
        evt.preventDefault();
<<<<<<< HEAD
        console.log('form sub')
        const setting = evt.target.elements.setting.value;

        const newConf = {};
        if (setting == 'beginner') {
            console.log('beginner set')
            newConf.width = 9;
            newConf.height = 9;
            newConf.mines = 10;
        }
        if (setting == 'intermediate') {
            console.log('intermediate set')
            newConf.width = 16;
            newConf.height = 16;
            newConf.mines = 40;
        }
        if (setting == 'expert') {
            console.log('expert set')
            newConf.width = 16;
            newConf.height = 30;
            newConf.mines = 99;
        }
        if (setting == 'custom') {
            console.log('custom set')
            newConf.width = parseInt(evt.target.elements.cW.value);
            if (newConf.width != newConf.width || newConf.width < 5) newConf.width = 5;
            if (newConf.width > 30) newConf.width = 30
            newConf.height = parseInt(evt.target.elements.cH.value);
            if (newConf.height != newConf.height || newConf.height < 5) newConf.height = 5;
            if (newConf.height > 30) newConf.height = 30
=======
        const setting = evt.target.elements.setting.value;
        if (setting === "") {
            setSettingsOpen(false);
            return;
        }
        console.log('changing settings ==>', setting)


        let newConf = {}
        if (setting == 'custom') {

            newConf.width = parseInt(evt.target.elements.cW.value);
            if (newConf.width != newConf.width || newConf.width < 5) newConf.width = 5;
            newConf.width = Math.min(30, newConf.width);
            // if (newConf.width > 30) newConf.width = 30

            newConf.height = parseInt(evt.target.elements.cH.value);
            if (newConf.height != newConf.height || newConf.height < 5) newConf.height = 5;
            newConf.height = Math.min(30, newConf.height);
            // if (newConf.height > 30) newConf.height = 30

>>>>>>> master
            newConf.mines = parseInt(evt.target.elements.cM.value);
            if (newConf.mines != newConf.mines || newConf.mines < 5) newConf.mines = 5;
            if (newConf.mines > newConf.height * newConf.width) newConf.mines = newConf.height * newConf.width - 1

        }
<<<<<<< HEAD
        // console.log(newConf.width, newConf.height, newConf.mines)
        setSettingsOpen(false);
        const newBoard = generateBoard(newConf.width, newConf.height, newConf.mines);
        setBoard(newBoard)
        setGame(newConf)
=======
        else {
            newConf = { ...conf[setting] }
        }

        setSettingsOpen(false);

        console.log(newConf)
        const newBoard = generateBoard(newConf.width, newConf.height, newConf.mines);
        setBoard(newBoard)
        setConf(newConf)
>>>>>>> master
        setGameState('ready')
        setOpened(0);
        setFlagged(0);
        setTimer(0)
    }

    let status
    if (gameState === 'lost') status = "GAME OVER"
    else if (gameState === 'ready') status = "LETS PLAY"
    else if (gameState === 'running') status = "PLAYING"
    else if (gameState === 'won') status = "YOU WIN"

    return (
        <div className={classes.minesweeperWrapper}>

            <div className={classes.minesweeper}
                ref={minesweeperBoard}>

<<<<<<< HEAD
                <GameHeader doubleClicked={openSettings} time={timer} minesLeft={gameConfig.mines - flagged}>
=======
                <GameHeader clicked={handleClick} time={timer} minesLeft={gameConfig.mines - flagged}>
>>>>>>> master
                    {status}
                </GameHeader>

                <GameBoard
                    width={gameConfig.width}
                    height={gameConfig.height}
                    board={board}
                    gameOver={gameState === "won" || gameState === "lost"}
                    clicked={revealTileHandler}
                    right_clicked={flagHandler}
                />
<<<<<<< HEAD
            </div >
            { settingsOpen ? <Settings submitted={settingsChanged} /> : null}
=======
            </div>
            { settingsOpen ? <Settings submitted={settingsChanged} clicked={closeSettings} /> : null}
>>>>>>> master
        </div>
    );
}

export default Minesweeper;



//content: can be -1 for bomb or a number >= 0 showing neighbouring bombs
//neighbours: an array with neighbouring squares (3-8)
//isOpen: has the player revealed this square?
<<<<<<< HEAD
//isFlagged ??? has the player flagged it??
=======
//isFlagged ??? has the player flagged it (right click)
>>>>>>> master
class Tile {
    constructor(content) {
        this.content = content;
        this.isOpen = false;
        this.isFlagged = false;
        this.neighbours = [];
    }
}


function generateBoard(width, height, mines) {
    console.log(`MAKING BOARD ${width}x${height} with ${mines} mines`)
    const max = width * height;
    const board = new Array(max).fill(null)

    for (let i = 0; i < max; i++) {
        const newSquare = new Tile(0);
        board[i] = newSquare;
        const newNeighbours = [];
        //find neighbours
        //top-left
        if (i >= width && i % width !== 0) newNeighbours.push(i - width - 1)
        //top
        if (i >= width) newNeighbours.push(i - width)
        //top-right
        if (i >= width && i % width !== width - 1) newNeighbours.push(i - width + 1)
        //right
        if (i % width !== width - 1) newNeighbours.push(i + 1)
        //bottom-right
        if (i < max - width && i % width !== width - 1) newNeighbours.push(i + width + 1)
        //bottom
        if (i < max - width) newNeighbours.push(i + width)
        //bottom-left
        if (i < max - width && i % width !== 0) newNeighbours.push(i + width - 1)
        //left
        if (i % width !== 0) newNeighbours.push(i - 1)

        newSquare.neighbours = newNeighbours;
    }

<<<<<<< HEAD
    //seet up mines
=======
    //set up mines
>>>>>>> master
    let i = 1;

    while (i <= mines) {
        let pos = Math.floor(Math.random() * max);
        //if theres a bomb there continue and get a new pos
        if (board[pos].content === -1) continue;
        //set new bomb
        board[pos].content = -1;
        board[pos].neighbours.forEach(tile => {

            if (board[tile].content !== -1) board[tile].content++
        })
        i++
    }
    return board
}