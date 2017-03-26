import React, {Component, PropTypes} from 'react';

class ProgressLevel extends Component {
    static PropTypes = {
        value: PropTypes.number
    };


    render () {
        const {value} = this.props;

        return (<div className="">{value}</div>);
    }
}
export default ProgressLevel;