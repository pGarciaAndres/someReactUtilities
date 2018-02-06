import * as React from 'react';
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";
import { ColorPicker } from "./components";
import { Color } from "./model";
import { ColorBrowser } from "./components/colorpicker/colorbrowser";

interface Props{

}

interface State {
    userName : string;
    editingName : string;
    color : Color;
}

export class App extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
            userName : '', 
            editingName: '',
            color: {
                red: 90,
                green: 90,
                blue: 90
            }
        };
    }

    setColorState = (newColor : Color) => {
        this.setState({color : newColor});
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
                <ColorBrowser
                    color={this.state.color}/>
                <ColorPicker
                    color={this.state.color}
                    onColorUpdated={this.setColorState}/>
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
