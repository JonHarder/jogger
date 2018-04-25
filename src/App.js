import './App.css';

import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// local components
import Run from './Components/Run';
import Header from './Components/Header';
import screenWidthAware from './Components/screenWidthAware';


const Runs = (props) =>
    <ul>
        {props.data.map(d =>
            <Run date={d.date} distance={d.distance} key={d.date} />
        )}
    </ul>


class Main extends Component {
    constructor(props, context) {
        super(props, context);

        const loggedIn = localStorage.getItem('loggedIn');
        this.state = {
            loggedIn: JSON.parse(loggedIn) ? true : false
        };

        this.logIn = this.logIn.bind(this);
    }

    logIn = () => {
        const loggedIn = JSON.stringify(!this.state.loggedIn);
        localStorage.setItem('loggedIn', loggedIn);
        this.setState({loggedIn: !this.state.loggedIn});
    }

    render() {
        const title = "Jogger";
        const runs = [
            {date: "2018-04-22", distance: 5.2},
            {date: "2018-04-20", distance: 1.6},
            {date: "2018-04-18", distance: 3.2},
            {date: "2017-12-20", distance: 0.5},
            {date: "2018-04-19", distance: 5.1},
        ].sort((a, b) => new Date(a.date) - new Date(b.date));

        return (
            <MuiThemeProvider className="App">
                <div>
                    <Header mobile={!this.props.desktop}
                            title={title}
                            loggedIn={this.state.loggedIn}
                            toggleLogin={this.logIn} />
                    {this.state.loggedIn && 
                        <Runs data={runs} />
                    }
                </div>
            </MuiThemeProvider>
        );
    }
}

const App = screenWidthAware(Main);

export default App;
