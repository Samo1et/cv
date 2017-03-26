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
        image: PropTypes.string,
        titleHeader: PropTypes.string,
    };

    render () {
        const {titleHeader} = this.props;

        return <div className="header-section">
            {this.renderSVG(titleHeader)}
            <h3>{titleHeader}</h3>

        </div>
    }

    renderSVG (titleHeader) {
        switch(titleHeader) {
            case 'education': return <Education className="header-section__img" />;
            case 'software': return <Software className="header-section__img" />;
            case 'profile': return <Profile className="header-section__img" />;
            case 'skills': return <Skills className="header-section__img" />;
            case 'experience': return <Experience className="header-section__img" />;
            case 'contact': return <Contact className="header-section__img" />;
        }
    }
}

export default HeaderSection;