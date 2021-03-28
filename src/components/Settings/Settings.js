<<<<<<< HEAD
import React from 'react';
import classes from './Settings.module.css'


const conf = {
    begginer: [9, 9, 10],
    intermediate: [16, 16, 40],
    expert: [16, 30, 99],
    custom: [null, null, null],
}

const Settings = (props) => {
    return (
        <div className={classes.settings}>
            <form onSubmit={props.submitted}>
                <div className={classes.formrow} >
                    <div>
                        <input type="radio" id="beg" name="setting" value="beginner" />
                        <label for="beg">beginner</label>
                    </div>
                    <div>9</div>
                    <div>9</div>
                    <div>10</div>

                </div>
                <div className={classes.formrow}>
                    <div >
                        <input type="radio" id="int" name="setting" value="intermediate" />
                        <label for="int">intermediate</label>
                    </div>
                    <div>16</div>
                    <div>16</div>
                    <div>40</div>
                </div>
                <div className={classes.formrow}>
                    <div>
                        <input type="radio" id="exp" name="setting" value="expert" />
                        <label for="exp">expert</label>
                    </div>
                    <div>16</div>
                    <div>30</div>
                    <div>99</div>
                </div>
                <div className={classes.formrow}>
                    <div>
                        <input type="radio" id="cus" name="setting" value="custom" />
                        <label for="cus">custom</label>
                    </div>
                    <div><input className={classes.custominput} type="text" name="cW" /></div>
                    <div><input className={classes.custominput} type="text" name="cH" /></div>
                    <div><input className={classes.custominput} type="text" name="cM" /></div>
                </div>
                <button type="submit">
                    Submit
                </button>



            </form>
        </div >
    );
}

=======
import React from 'react';
import classes from './Settings.module.css'


// const conf = {
//     begginer: [9, 9, 10],
//     intermediate: [16, 16, 40],
//     expert: [16, 30, 99],
//     custom: [null, null, null],
// }

const Settings = (props) => {
    return (
        <div className={classes.settings}>
            <p onClick={props.clicked} className={classes.close}>X</p>
            <div className={classes.labels}>
                <p>SETTINGS</p>
                <p>width</p>
                <p>height</p>
                <p>mines</p>
            </div>
            <form onSubmit={props.submitted}>
                <div className={classes.formrow} >
                    <div>
                        <input type="radio" id="beg" name="setting" value="beginner" />
                        <label for="beg"> Beginner</label>
                    </div>
                    <div>9</div>
                    <div>9</div>
                    <div>10</div>

                </div>
                <div className={classes.formrow}>
                    <div >
                        <input type="radio" id="int" name="setting" value="intermediate" />
                        <label for="int"> Intermediate</label>
                    </div>
                    <div>16</div>
                    <div>16</div>
                    <div>40</div>
                </div>
                <div className={classes.formrow}>
                    <div>
                        <input type="radio" id="exp" name="setting" value="expert" />
                        <label for="exp"> Expert</label>
                    </div>
                    <div>16</div>
                    <div>30</div>
                    <div>99</div>
                </div>
                <div className={classes.formrow}>
                    <div>
                        <input type="radio" id="cus" name="setting" value="custom" />
                        <label for="cus"> custom</label>
                    </div>
                    <div><input className={classes.custominput} type="text" name="cW" /></div>
                    <div><input className={classes.custominput} type="text" name="cH" /></div>
                    <div><input className={classes.custominput} type="text" name="cM" /></div>
                </div>
                <button type="submit">
                    Submit
                </button>



            </form>
        </div>
    );
}

>>>>>>> master
export default Settings;