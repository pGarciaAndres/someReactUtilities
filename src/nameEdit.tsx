import * as React from 'react';
import { OnChangeTextType, onChangeText } from './nameEdit.business';
import { Fragment } from "react";

interface Props {
    disableSubmitButton: boolean;
    editingUserName: string;
    onNameUpdated : OnChangeTextType;
    onNameSubmit : () => void;
}

export const NameEditComponent = (props : Props) => {

    const onChangeEditingName = (event) => {
        props.onNameUpdated(event.target.value);
    }

    const onNameSubmit = (event) => {
        props.onNameSubmit();
    }

    return(
        <Fragment>
            <label>Update Name: </label>
            <input 
                value={props.editingUserName}
                onChange={onChangeEditingName}
            />
            <button
                className="btn btn-default"
                onClick={onNameSubmit}
                disabled={props.disableSubmitButton}>
                submit
            </button>
        </Fragment>
    )

}