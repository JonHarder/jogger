import React, {Component} from 'react';

// material-ui
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import { DropDownMenu, ToolbarSeparator, RaisedButton } from 'material-ui';


class Header extends Component {
    constructor(props, context) {
        super(props, context);

        let value = localStorage.getItem('value');
        if(value) {
            value = JSON.parse(value);
        } else {
            value = 1;
        }

        this.state = {
            value: value,
        };
    }

    handleChange = (event, index, value) => {
        localStorage.setItem('value', JSON.stringify(value));
        this.setState({value});
    }

    render() {
        const label = this.props.loggedIn ? "Log Out" : "Log In"
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu style={{color: "black"}} value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Hello" />
                        <MenuItem value={2} primaryText="World" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text={this.props.title} />
                    <ToolbarSeparator />
                    <RaisedButton primary={true} label={label} onClick={this.props.toggleLogin} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}


export default Header;