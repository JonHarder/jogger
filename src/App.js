import './App.css';

import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepPurple800, purple50} from 'material-ui/styles/colors';

// local components
import Run from './Components/Run';
import Header from './Components/Header';
import screenWidthAware from './Components/screenWidthAware';

const muiTheme = getMuiTheme({
    palette: {
        textColor: purple50,
        canvasColor: deepPurple800,
        pickerHeaderColor: deepPurple800,
        primary1Color: deepPurple800
    }
});


const Runs = (props) =>
    <ul>
        {props.data.map(d =>
            <Run date={d.date} distance={d.distance} key={d.date} />
        )}
    </ul>


class Main extends Component {
    render() {
        const title = "Jogger";
        const bodyStyle = {
            'marginRight': this.props.desktop ? '50px': '0px',
            'marginLeft': this.props.desktop ? 'inherit': '0px',
        };
        const runs = [
            {date: "2018-04-22", distance: 5.2},
            {date: "2018-04-20", distance: 1.6},
            {date: "2018-04-18", distance: 3.2},
            {date: "2017-12-20", distance: 0.5},
            {date: "2018-04-19", distance: 5.1},
        ].sort((a, b) => new Date(a.date) - new Date(b.date));

        return (
            <MuiThemeProvider className="App" muiTheme={muiTheme}>
                <div style={{backgroundColor: purple50}}>
                    <Header mobile={!this.props.desktop} title={title} />
                    <div style={bodyStyle}>
                        <Runs data={runs} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

const App = screenWidthAware(Main);

export default App;
