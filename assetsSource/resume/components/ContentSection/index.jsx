import React, {Component, PropTypes} from 'react';
import {Col} from "react-bootstrap";
import ProgressBar from "resume/components/ProgressBar/index";
import './style.styl';

class ContentSection extends Component {
    static PropTypes = {};

    render () {
        const {section, content} = this.props;

        return <section className="site-item">

            {section == "user" ? this.renderUser(content) : null}
            {section == "profile" ? this.renderProfile(content) : null}
            {section == "contact" ? this.renderContact(content) : null}
            {section == "skills" ? this.renderSkills(content) : null}
            {section == "education" ? this.renderEducation(content) : null}
            {section == "experience" ? this.renderExperience(content) : null}
            {section == "software" ? this.renderSoftware(content) : null}
        </section>
    }

    renderUser (userData) {
        const {name, surname, profession, image} = userData;
        const src = "assets/img/" + image;

        return (<section className="user">
            {image ?  <img className="user__photo" src={src} alt="user photo" />
                : <div className="user__default-photo"></div>}
            <div className="user__name">{name}</div>
            <div className="user__surname">{surname}</div>
            <div className="user__profession">{profession}</div>
        </section>);
    }

    renderProfile (content) {
        return <div className="profile">{content}</div>
    }

    renderContact (contacts) {
        return <section className="contact">
            {Object.keys(contacts).map((contact, index)=> {
                return <div key={index} className="contact__item">
                    <Col md={4}>{contact}</Col>
                    <Col md={8}>{contacts[contact]}</Col>
                </div>
            })}
        </section>
    }

    renderSkills (skills) {
        return <section className="skills">
            {Object.keys(skills).map((skill, index) => {
                return <div key={index} className="skill__item">
                    <div className="skill__name">{skill}</div>
                    <div className="skill__level">{skills[skill]}</div>
                </div>
            })}
        </section>
    }

    renderEducation (courses) {
        return <section className="education">
            {Object.keys(courses).map((course, index) => {
                const {courseName, date, description, university} = courses[course];

                return <div key={index} className="education__item">
                    <span className="education__course-name">{courseName} //</span>
                    <span className="education__date">{date}</span>
                    <div className="education__university">{university}</div>
                    <div className="education__description">{description}</div>
                </div>
            })}
        </section>
    }

    renderExperience (companies) {
        return <section className="experience">
            {Object.keys(companies).map((company, index) => {
                const {companyName, date, description, post} = companies[company];

                return <div key={index} className="experience__item">
                    <span className="experience__company-name">{companyName} //</span>
                    <span className="experience__date">{date}</span>
                    <div className="experience__post">{post}</div>
                    <div className="experience__description">{description}</div>
                </div>
            })}
        </section>
    }

    renderSoftware (programs) {
        return <section className="software">
            {Object.keys(programs).map((program, index) => {
                return <Col key={index} md={6}>
                    <div className="software__name">{program}</div>

                    <ProgressBar value={programs[program]} />
                </Col>
            })}
        </section>
    }
}

export default ContentSection;