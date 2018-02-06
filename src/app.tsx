import * as React from 'react';
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

interface Props{

}

interface State {
    userName : string;
    editingName : string;
}

export class App extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {userName : '', editingName: ''}
    }

    componentDidMount() {
        setTimeout(() => {
            const newText = 'hello from ajax call';
            this.setState({userName : newText, editingName : newText})
        },2000)
    }

    setEditingUsernameState = (newName : string) => {
        this.setState({
            editingName: newName,
        });
    }

    setUsernameFinal = () => {
        this.setState({userName : this.state.editingName})
    }

    disableSubmitButton() {
        return (this.state.editingName === '' || this.state.editingName === this.state.userName);
        
    }

    public render() {
        return (
            <div>
                <NameEditComponent
                    disableSubmitButton={this.disableSubmitButton()}
                    editingUserName={this.state.editingName}
                    onNameUpdated={this.setEditingUsernameState}
                    onNameSubmit={this.setUsernameFinal}
                />
                <HelloComponent userName={this.state.userName} />
            </div>
        );
    }
}
