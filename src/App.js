import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';


const Header = ({title}) =>
    <AppBar title={title} iconClassNameRight="muidocs-icon-navigation-expand-more" />


class App extends Component {
    render() {
        const title = "Jogger";
        
        return (
            <MuiThemeProvider className="App">
                <div>
                    <Header title={title} />
                    <div>
                        <RaisedButton label="Foo" />
                        <DatePicker hintText="What Date did you run on?" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
