import * as React from 'react';
import { Fragment } from "react";

interface Props {
    userName: string;
    onChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameEditComponent = (props: Props) =>
    <Fragment>
        <label>Update name: </label>
        <input
            value={props.userName}
            onChange={props.onChange}
        />
    </Fragment>