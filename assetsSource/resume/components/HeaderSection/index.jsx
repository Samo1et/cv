import React, {Component, PropTypes} from 'react';
import './style.less';

class SiteItem extends Component {
    static propTypes = {
        newsData: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            url: PropTypes.string,
            logo: PropTypes.string,
        }),
    };

    render () {
        const {name, description, url, logo} = this.props.newsData;
        return <div className="site-item">
            <h3>{name}</h3>
            <a href={url}>{description}</a>
            <br />
            <br />
            <img src={logo} alt={description} />
        </div>
    }
}

export default SiteItem;