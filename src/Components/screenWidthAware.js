import React, {Component} from 'react';


const screenWidthAware = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                desktop: this.isDesktop()
            };
        }

        isDesktop() {
            return window.innerWidth >= 720;
        }

        updateExperience() {
            this.setState({desktop: this.isDesktop()});
        }

        componentDidMount() {
            this.updateExperience();
            window.addEventListener("resize", this.updateExperience.bind(this));
        }
        
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateExperience.bind(this));
        }

        render() {
            return (
                <WrappedComponent {...this.state} {...this.props}  />
            );
        }
    }
}

export default screenWidthAware;