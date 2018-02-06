import * as React from 'react';
import { Color } from "../../model";

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
    const onUpdateRed = (e) => {
        props.onColorUpdated(
            {
                red: e.target.valueAsNumber,
                green: props.color.green,
                blue: props.color.blue
            });
    }

    return (
        <div>
            <h2>R: {props.color.red} G: {props.color.green} B: {props.color.blue}</h2>
            <span>Red</span>
            <input type="range"
                min="0"
                max="255"
                value={props.color.red}
                onChange={onUpdateRed} />
            
            <br/>

            <span>Green</span>
            <input type="range"
                min="0"
                max="255"
                value={props.color.green}
                onChange={
                    (e) => props.onColorUpdated(
                        {
                            red: props.color.red,
                            green: e.target.valueAsNumber,
                            blue: props.color.blue
                        }
                    )
                } />
            <br/>

            <span>Blue</span>
            <input type="range"
                min="0"
                max="255"
                value={props.color.blue}
                onChange={
                    (e) => props.onColorUpdated(
                        {
                            red: props.color.red,
                            green: props.color.green,
                            blue: e.target.valueAsNumber
                        }
                    )
                } />
        </div>
    )
};