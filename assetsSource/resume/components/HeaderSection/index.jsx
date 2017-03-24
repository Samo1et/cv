import React, {Component, PropTypes} from 'react';
import './style.styl';

class HeaderSection extends Component {
    static propTypes = {
        image: PropTypes.string,
        titleHeader: PropTypes.string,
    };

    render () {
        const {image, titleHeader} = this.props;
        return <div className="site-item">
            <h3>{titleHeader}</h3>
            <img src={image} alt={titleHeader} />
        </div>
    }
}

export default HeaderSection;