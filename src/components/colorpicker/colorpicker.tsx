import * as React from 'react';
import { Color } from "../../model";

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

const onUpdateColorComponent = (props: Props, colorId : keyof Color) => (e) => {
    props.onColorUpdated(
        {
            ...props.color,
            [colorId]: e.target.valueAsNumber,
        }
    )
}

export const ColorPicker = (props: Props) => {

    return (
        <div>
            <h2>R: {props.color.red} G: {props.color.green} B: {props.color.blue}</h2>
            <span>Red</span>
            <input type="range"
                min="0"
                max="255"
                value={props.color.red}
                onChange={onUpdateColorComponent(props, 'red')} />
            <br/>

            <span>Green</span>
            <input type="range"
                min="0"
                max="255"
                value={props.color.green}
                onChange={onUpdateColorComponent(props, 'green')} />
            <br/>

            <span>Blue</span>
            <input type="range"
                min="0"
                max="255"
                value={props.color.blue}
                onChange={onUpdateColorComponent(props, 'blue')} />
        </div>
    )
};