import React from 'react';
import classes from './Square.module.css'
import tileIMG from '../../../assets/TILE.png'
import tileOpenIMG from '../../../assets/TILE_OPEN.png'
import tileBoomIMG from '../../../assets/TILE_BOOM.png'
import tileBombIMG from '../../../assets/TILE_BOMB.png'
import tileWrongIMG from '../../../assets/TILE_WRONG.png'


const imgs = {
    '0': tileOpenIMG,
    '-2': tileBoomIMG,
    '-1': tileBombIMG,
    '-10': tileWrongIMG,
}

const square = (props) => {

    // const imgStyle = { backgroundImage: `url(${props.content === -2 ? tileBoomIMG : (props.content || props.content === 0 ? tileOpenIMG : tileIMG)})` }
    const classList = [classes.square]
    let _content = props.content;

    //we use content -10 and -2 for extra styling options
    //-2 is thew bomb we opened and lost the game
    //-10 are the squares we had flagged as bombs but were safe
    let tileImg = tileIMG
    if (_content != null) {
        classList.push(classes[`color${_content}`], classes.open)
        tileImg = tileOpenIMG
        if (_content <= 0) {
            // console.log(_content, imgs[_content])
            tileImg = imgs[_content]
            _content = ""
            // tileImg = symbol[_content][1]
        }
    }
    const imgStyle = { backgroundImage: `url(${tileImg})` }
    // switch (props.content) {
    //     case -10:
    //         classList.push(classes.wrong)
    //         _content = 'X';
    //         break;
    //     case -2:
    //         classList.push(classes.boom, classes.open)
    //         _content = '*';
    //         break;
    //     case -1:
    //         classList.push(classes.danger, classes.open)
    //         _content = '*';
    //         break;
    //     case 0:
    //         classList.push(classes.one, classes.open)
    //         _content = '';
    //         break;
    //     case 1:
    //         classList.push(classes.one, classes.open)
    //         break;
    //     case 2:
    //         classList.push(classes.two, classes.open)
    //         break;
    //     case 3:
    //         classList.push(classes.three, classes.open)
    //         break;
    //     case 4:
    //         classList.push(classes.four, classes.open)
    //         break;
    //     case 5:
    //         classList.push(classes.five, classes.open)
    //         break;
    //     case 6:
    //         classList.push(classes.six, classes.open)
    //         break;
    //     case 7:
    //         classList.push(classes.seven, classes.open)
    //         break;
    // }

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