import React from 'react';
import classes from './Square.module.css'
import tileIMG from '../../../assets/TILE.png'
import tileOpenIMG from '../../../assets/TILE_OPEN.png'
import tileBoomIMG from '../../../assets/TILE_BOOM.png'



const square = (props) => {

    const imgStyle = { backgroundImage: `url(${props.content === -2 ? tileBoomIMG : (props.content || props.content === 0 ? tileOpenIMG : tileIMG)})` }
    const classList = [classes.square]
    let _content = props.content;

    // if (props.content || props.content === 0) classList.push(classes.open)
    switch (props.content) {
        case -10:
            classList.push(classes.wrong)
            _content = 'X';
            break;
        case -2:
            classList.push(classes.boom, classes.open)
            _content = '*';
            break;
        case -1:
            classList.push(classes.danger, classes.open)
            _content = '*';
            break;
        case 0:
            classList.push(classes.one, classes.open)
            _content = '';
            break;
        case 1:
            classList.push(classes.one, classes.open)
            break;
        case 2:
            classList.push(classes.two, classes.open)
            break;
        case 3:
            classList.push(classes.three, classes.open)
            break;
        case 4:
            classList.push(classes.four, classes.open)
            break;
        case 5:
            classList.push(classes.five, classes.open)
            break;
        case 6:
            classList.push(classes.six, classes.open)
            break;
        case 7:
            classList.push(classes.seven, classes.open)
            break;
    }

    if (props.flagged) {
        classList.push(classes.flagged);
        _content = 'B';
    }


    return (
        <div
            style={imgStyle}
            className={classList.join(" ")}
            onContextMenu={evt => props.right_clicked(evt)}
            onClick={props.clicked}>
            {_content}
        </div>
    );
}

export default square;