import './App.css';

import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButtom from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// local components
import Runs from './Components/Runs';
import Header from './Components/Header';
import Footer from './Components/Footer';
import screenWidthAware from './Components/screenWidthAware';
import JogAdder from './Components/JogAdder';

import api from './lib/api';


class Main extends Component {
    constructor(props, context) {
        super(props, context);

        const loggedIn = localStorage.getItem('loggedIn');
        this.state = {
            loggedIn: JSON.parse(loggedIn) ? true : false,
            sessions: [],
            selection: 0,
            dialogOpen: false,
        };
        // this.getSessions()
        this.state.sessions = [
            {date: '2018-05-01', distance: 4.8},
            {date: '2018-04-30', distance: 2.6},
            {date: '2018-04-28', distance: 3.2},
            {date: '2018-04-19', distance: 5.1}
        ]
    }

    select = (id) => {
        this.setState({selection: id})
    }

    getSessions = () => {
        api.getSessions().then(sessions => this.setState({sessions}))
    }

    logIn = () => {
        const loggedIn = JSON.stringify(!this.state.loggedIn);
        localStorage.setItem('loggedIn', loggedIn);
        this.setState({loggedIn: !this.state.loggedIn});
    }

    handleClose = () => {
        this.setState({dialogOpen: false})
    }

    render() {
        const title = "Jogger";
        const buttonStyle = {
            bottom: '80px',
            right: '50px',
            position: 'fixed',
        };

        return (
            <MuiThemeProvider className="App">
                <div>
                    <Header mobile={!this.props.desktop}
                            title={title}
                            loggedIn={this.state.loggedIn}
                            toggleLogin={this.logIn} />
                    {this.state.selection === 0 ? 
                        <div>
                            {this.state.loggedIn && 
                                <div>
                                    <Runs desktop={this.props.desktop} data={this.state.sessions} />
                                    <FloatingActionButtom onClick={() => this.setState({dialogOpen: true})}
                                                        style={buttonStyle}>
                                        <ContentAdd />
                                    </FloatingActionButtom>
                                    <JogAdder handleClose={this.handleClose} open={this.state.dialogOpen} />
                                </div>
                            }
                        </div> :
                        <h1>Graphin some stuff</h1>
                    }
                    <Footer selected={this.state.selection} onChange={this.select} />
                </div>
            </MuiThemeProvider>
        );
    }
}

const App = screenWidthAware(Main);

export default App;
