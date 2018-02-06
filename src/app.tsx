import * as React from 'react';
import { HelloComponent } from "./hello";

interface Props{

}

interface State {
    userName : string;
}

export class App extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {userName : 'defaultUserName'}
    }

    setUsernameState = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({userName: event.target.value})
    }

    public render() {
        return (
            <HelloComponent userName={this.state.userName} />
        );
    }
}
