import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import Drawer from 'material-ui/Drawer';


const Header = (props) =>
    <AppBar title={props.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={props.onLeftButtonClick} />


const SideBar = (props) =>
    <Drawer open={props.open}
            docked={false}
            onRequestChange={props.close}>
        <Menu>
            <MenuItem primaryText="One" />
            <MenuItem primaryText="Two" />
            <MenuItem primaryText="Three" />
        </Menu>
    </Drawer>


class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.toggleDrawer = this.toggleDrawer.bind(this);

        this.state = {open: false};
    }


    toggleDrawer() {
        this.setState({open: !this.state.open});
    }

    closeDrawer() {
        this.setState({open: false});
    }


    render() {
        const title = "Jogger";
        
        return (
            <MuiThemeProvider className="App">
                <div>
                    <SideBar close={() => this.setState({open: false})}
                             open={this.state.open} />
                    <Header onLeftButtonClick={this.toggleDrawer} title={title} />
                    <div>
                        <RaisedButton onClick={this.toggleDrawer} label="Foo" />
                        <DatePicker hintText="What Date did you run on?" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
