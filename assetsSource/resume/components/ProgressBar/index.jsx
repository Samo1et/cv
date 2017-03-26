import React, {Component, PropTypes} from 'react';
import './style.styl';

class ProgressBar extends Component {
    static PropTypes = {
        value: PropTypes.number
    };


    render () {
        const {value} = this.props;
        const style = {
            width: value,

        };
        return <div className="software-progress-bar">
            <div className="software-progress-bar__progress" style={style}></div>
            <div className="software-progress-bar__rest"></div>
        </div>
    };
}
export default ProgressBar;