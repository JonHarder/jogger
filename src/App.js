import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// local components
import Run from './Components/Run';
import Header from './Components/Header';


const Runs = (props) =>
    <ul>
        {props.data.map(d =>
            <Run date={d.date} distance={d.distance} key={d.date} />
        )}
    </ul>


const App = (props) => {
    const title = "Jogger";
    const bodyStyle = {
        'marginRight': '50px',
    };
    const runs = [
        {date: "2018-04-22", distance: 5.2},
        {date: "2018-04-20", distance: 1.6},
        {date: "2018-04-18", distance: 3.2},
        {date: "2017-12-20", distance: 0.5},
        {date: "2018-04-19", distance: 5.1},
    ].sort((a, b) => new Date(a.date) - new Date(b.date));

    console.log(runs);
    
    return (
        <MuiThemeProvider className="App">
            <div>
                <Header title={title} />
                <div style={bodyStyle}>
                    <Runs data={runs} />
                </div>
            </div>
        </MuiThemeProvider>
    );

}


export default App;
