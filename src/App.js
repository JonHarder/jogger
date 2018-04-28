import './App.css';

import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButtom from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// local components
import Run from './Components/Run';
import Header from './Components/Header';
import Footer from './Components/Footer';
import screenWidthAware from './Components/screenWidthAware';

import api from './lib/api';


const Runs = (props) => {
    const margin = props.desktop ? 10 : 0
    const style = {
        width: '90%',
        marginLeft: `${margin}px`,
        marginRight: `${margin}px`
    }
    return (
        <ul style={style}>
            {props.data.map(d =>
                <Run date={d.date} distance={d.distance} key={d.date} />
            )}
        </ul>
    )
}


class Main extends Component {
    constructor(props, context) {
        super(props, context);

        const loggedIn = localStorage.getItem('loggedIn');
        this.state = {
            loggedIn: JSON.parse(loggedIn) ? true : false,
            sessions: [],
            selection: 0,
        };

        this.logIn = this.logIn.bind(this);

        this.getSessions()
    }

    select = (id) => {
        this.setState({selection: id})
    }

    getSessions() {
        api.getSessions().then(sessions => this.setState({sessions}))
    }

    logIn = () => {
        const loggedIn = JSON.stringify(!this.state.loggedIn);
        localStorage.setItem('loggedIn', loggedIn);
        this.setState({loggedIn: !this.state.loggedIn});
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
                    {this.state.loggedIn && 
                        <Runs desktop={this.props.desktop} data={this.state.sessions} />
                    }
                    <FloatingActionButtom style={buttonStyle}>
                        <ContentAdd />
                    </FloatingActionButtom>
                    <Footer selected={this.state.selection} onChange={this.select} />
                </div>
            </MuiThemeProvider>
        );
    }
}

const App = screenWidthAware(Main);

export default App;
