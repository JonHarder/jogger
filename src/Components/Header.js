import React, {Component} from 'react';

// material-ui
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import { DropDownMenu, ToolbarSeparator, RaisedButton } from 'material-ui';


class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            value: 1,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu style={{color: "black"}} value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Hello" />
                        <MenuItem value={2} primaryText="World" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Jogger" />
                    <ToolbarSeparator />
                    <RaisedButton primary={true} label={this.props.loggedIn ? "Log Out" : "Log In"} onClick={this.props.toggleLogin} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}


export default Header;