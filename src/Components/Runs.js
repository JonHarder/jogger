import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Running from 'material-ui/svg-icons/maps/directions-run';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

const Run = ({data}) => {
    return <ListItem primaryText={`Run on ${data.date} (${data.distance} miles)`} leftIcon={<Running />}/>
}

const Runs = (props) => {
    const style = {
        width: '95%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '10px',
    }
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0, 0)
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 0, 0, 0, 0)
    const yesterdaysRuns = props.data.filter(d => {
        return new Date(d.date) - yesterday >= 0 && new Date(d.date) - today < 0
    })
    const todaysRuns = props.data.filter(d => {
        return new Date(d.date) - today >= 0
    })
    const olderRuns = props.data.filter(d => {
        return new Date(d.date) - yesterday < 0
    })
    return (
        <Paper style={style} zDepth={2}>
            <List>
                {todaysRuns.length > 0 && 
                   <div>
                     <Subheader>Today</Subheader>
                     {todaysRuns.map(r => <Run data={r} key={r.date} />)}
                   </div>
                }
                {yesterdaysRuns.length > 0 && 
                   <div>
                     <Subheader>Yesterday</Subheader>
                     {yesterdaysRuns.map(r => <Run data={r} key={r.date} />)}
                   </div>
                }
                <Subheader>Older</Subheader>
                {olderRuns.map(d =>
                    <Run data={d} key={d.date} />
                )}
            </List>
        </Paper>
    )
}


export default Runs;