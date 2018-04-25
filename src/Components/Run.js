import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


export default ({date, distance}) => {
    const title = "Run on " + date;
    const subtitle = distance + " miles";
    return (
        <Card zDepth={2}>
            <CardHeader
                title={title}
                subtitle={subtitle}
                actAsExpander={true}
                showExpandableButton={true} />
            <CardText expandable={true}>
                <p>Run on {date} -- {distance} miles</p>
            </CardText>
        </Card>
    );
}