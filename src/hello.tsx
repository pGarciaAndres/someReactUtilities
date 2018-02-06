import * as React from 'react';

interface Props{
    userName : string;
}

export const HelloComponent = (props: Props) =>
    <h2>Hello component {props.userName}! </h2>