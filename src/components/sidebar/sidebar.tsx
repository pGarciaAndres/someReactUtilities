import * as React from 'react';

const classNames = require('./sidebar.css');

interface Props {
    isVisible: boolean;
}

const divStyle = (props : Props) => ({
    width: (props.isVisible) ? '23rem' : '0rem'
});

export const SidebarComponent : React.StatelessComponent<Props> = (props) => 
    <div id="MySideNav" className={classNames.sidenav} style={divStyle(props)}>
        {props.children}
    </div>
