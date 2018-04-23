import React, {Component} from 'react';

// material-ui
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';


class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {open: false};
    }

    render() {
        return (
            <div>
                <AppBar title={this.props.title}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={() => this.setState({open: true})} />
                <Drawer open={this.state.open}
                        docked={false}
                        onRequestChange={() => this.setState({open: false})}>
                    <Menu desktop={false}>
                        <MenuItem primaryText="Settings" />
                        <Divider />
                        <MenuItem primaryText="Sign Out" />
                    </Menu>
                </Drawer>
            </div>
        );
    }
}


export default Header;