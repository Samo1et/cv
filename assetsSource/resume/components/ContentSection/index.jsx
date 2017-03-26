import React, {Component, PropTypes} from 'react';
import './style.styl';

class ContentSection extends Component {
    static PropTypes = {

    };

    render () {
        const {content} = this.props;
       // const {name, surname, profession} = this.content.user;
        console.log(content);

        return <div className="site-item">

            {/*{this.renderUser(name, surname, profession)}*/}
        </div>
    }

    renderUser(name, surname, profession) {
        return (<div className="user">
            <div className="user__name">{name}</div>
            <div className="user__surname">{surname}</div>
            <div className="user__profession">{profession}</div>
        </div>);
    }
}

export default ContentSection;