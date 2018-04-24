import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {purple50, deepPurple800} from 'material-ui/styles/colors';


export default ({date, distance}) => {
    const title = "Run on " + date;
    const subtitle = distance + " miles";
    const style = {
        backgroundColor: purple50,
        color: deepPurple800,
    };
    return (
        <Card zDepth={2}>
            <CardHeader
                title={title}
                subtitle={subtitle}
                actAsExpander={true}
                showExpandableButton={true} />
            <CardText style={style} expandable={true}>
                <p>Run on {date} -- {distance} miles</p>
            </CardText>
        </Card>
    );
}