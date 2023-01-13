import React from "react";
import Draggable from 'react-free-draggable';

function Textbox() {
    return (
        <Draggable bounds={'.document'} scale={1}>
            <div className={'textbox'}>
                <label htmlFor={'textbox__input'}>Textbox</label>
                <textarea id={'textbox__input'} className={'textbox__input'} name={'Textbox'}></textarea>
            </div>
        </Draggable>
    )
}

export default Textbox;