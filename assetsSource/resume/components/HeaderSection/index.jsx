import React, {Component, PropTypes} from 'react';
import './style.styl';
import Profile from './img/person.svg'
import Contact from './img/phone.svg'
import Skills from './img/skills.svg'
import Education from './img/star.svg'
import Experience from './img/bag.svg'
import Software from './img/pc.svg'

class HeaderSection extends Component {
    static propTypes = {
        titleHeader: PropTypes.string,
    };

    render () {
        const {titleHeader} = this.props;

        return <div className="header-section clearfix">
            <div className="header-section__img">
                {this.renderSVG(titleHeader)}
            </div>
            <h3 className="header-section__title">{titleHeader}</h3>
            <span className="header-section__line"></span>
        </div>
    }

    renderSVG (titleHeader) {
        switch(titleHeader) {
            case 'education': return <Education />;
            case 'software': return <Software />;
            case 'profile': return <Profile />;
            case 'skills': return <Skills />;
            case 'experience': return <Experience />;
            case 'contact': return <Contact />;
        }
    }
}

export default HeaderSection;