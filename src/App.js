<<<<<<< HEAD
import React, { Component } from 'react';
import Minesweeper from './containers/Minesweeper/Minesweeper.js';

class App extends Component {

    render() {
        const style = {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
        }
        return (
            <main style={style}>
                <Minesweeper />
            </main>
        );
    }
}

=======
import React, { Component } from 'react';
import Minesweeper from './containers/Minesweeper/Minesweeper.js';

class App extends Component {

    render() {
        const style = {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
        }
        return (
            <main style={style}>
                <Minesweeper />
            </main>
        );
    }
}

>>>>>>> master
export default App;