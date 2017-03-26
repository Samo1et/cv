import React, {Component, PropTypes} from 'react';
import './style.styl';

export default class ContentSection extends Component {
    static PropTypes = {

    };

    render () {
        const {content} = this.props;
        return <div className="site-item">
            {content}
        </div>
    }
}