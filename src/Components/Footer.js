import React from 'react';

import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import TimeLine from 'material-ui/svg-icons/action/timeline';
import Running from 'material-ui/svg-icons/maps/directions-run';


const Footer = (props) => {
    const style = {
        position: 'fixed',
        bottom:'0',
        width: '100%',
    }
    return (
        <Paper style={style} zDepth={1}>
            <BottomNavigation selectedIndex={props.selected}>
                <BottomNavigationItem
                    label="Runs"
                    icon={<Running />}
                    style={{width: 20, height: 20}}
                    onClick={() => props.onChange(0)}
                />
                <BottomNavigationItem
                    label="Graph"
                    icon={<TimeLine />}
                    onClick={() => props.onChange(1)}
                />
            </BottomNavigation>
        </Paper>
    )
}

export default Footer;