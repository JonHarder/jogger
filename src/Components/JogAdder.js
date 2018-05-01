import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class JogAdder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            distance: "",
        }
    }

    handleDateChange = (event, date) => {
        this.setState({date})
    }

    handleDistanceChange = event => {
        const distance = parseFloat(event.target.value)
        this.setState({distance})
    }

    clearParams = () => {
        this.setState({date: new Date(), distance: ""})
    }

    handleClose = () => {
        this.clearParams()
        this.props.handleClose()
    }

    onSubmit = () => {
        const {date, distance} = this.state
        console.log("date:", date, ", distance:", distance)
        this.clearParams()
        this.props.handleClose()
    }

    valid = () => {
        const {distance} = this.state
        if(Number.isFinite(distance) && distance > 0) {
            return true
        }
        return false
    }

    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose} />,
            <FlatButton
              label="Submit"
              primary={true}
              disabled={!this.valid()}
              onClick={this.onSubmit} />
        ]

        return (
            <Dialog title="Record your run"
                    modal={true}
                    actions={actions}
                    open={this.props.open}>
                <DatePicker value={this.state.date} onChange={this.handleDateChange} hintText="Date of the run" />
                <TextField
                  type="number"
                  value={this.state.distance}
                  onChange={this.handleDistanceChange}
                  hintText="miles"
                  floatingLabelText="How many miles?" />
            </Dialog>
        )
    }
}


export default JogAdder;