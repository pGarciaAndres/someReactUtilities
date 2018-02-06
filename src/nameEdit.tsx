import * as React from 'react';
import { OnChangeTextType, onChangeText } from './nameEdit.business';

interface Props {
    userName: string;
    onNameUpdated : OnChangeTextType;
}

export const NameEditComponent = (props: Props) => 
    <div>
        <label>Update name: </label>
        <input
            value={props.userName}
            onChange={onChangeText(props.onNameUpdated)}
        />
    </div>