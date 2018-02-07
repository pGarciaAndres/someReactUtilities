import * as React from 'react';
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";
import { ColorPicker, ColorBrowser, SidebarComponent } from "./components";
import { Color } from "./model";

interface Props{

}

interface State {
    userName : string;
    editingName : string;
    color : Color;
    isSideBarVisible : boolean;
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
            },
            isSideBarVisible: false,
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

    checkDisableSubmitButton() {
        return (this.state.editingName === '' || this.state.editingName === this.state.userName);
    }

    toggleSidebarVisibility = () => {
        const newVisibleState = !this.state.isSideBarVisible;

        this.setState({isSideBarVisible : newVisibleState});
    }

    public render() {
        return (
            <div>
                <SidebarComponent isVisible={this.state.isSideBarVisible}>
                    <ul>
                        <li>Pelicula 1</li>
                        <li>Pelicula 2</li>
                        <li>Pelicula 3</li>
                    </ul>
                </SidebarComponent>
                <ColorBrowser
                    color={this.state.color}/>
                <ColorPicker
                    color={this.state.color}
                    onColorUpdated={this.setColorState}/>
                <NameEditComponent
                    disableSubmitButton={this.checkDisableSubmitButton()}
                    editingUserName={this.state.editingName}
                    onNameUpdated={this.setEditingUsernameState}
                    onNameSubmit={this.setUsernameFinal}
                />
                <HelloComponent userName={this.state.userName} />
                
                <div className="float-right">
                    <button
                        className="btn btn-default"
                        onClick={this.toggleSidebarVisibility}>
                        Toggle Sidebar
                    </button>
                </div>
            </div>
        );
    }
}
