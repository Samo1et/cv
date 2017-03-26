import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './style.styl';
import {Col, Grid, Row, Button, ButtonToolbar} from 'react-bootstrap';
import HeaderSection from 'resume/components/HeaderSection';
import ContentSection from 'resume/components/ContentSection';

function mapStateToProps (state) {
    return {
        userData: state.userData,
    };
}

class Resume extends Component {
    static propTypes = {
        contact: PropTypes.object,
        education: PropTypes.object,
        experience: PropTypes.object,
        profile: PropTypes.object,
        skills: PropTypes.object,
        software: PropTypes.object,
        user: PropTypes.object,
    };

    render () {
        const {userData} = this.props;
        return (
            <Grid>
                <ButtonToolbar>
                    <Button bsStyle="primary">Default Resume</Button>
                    <Button bsStyle="primary">Samoilis</Button>
                </ButtonToolbar>
                {Object.keys(userData).map((section, index) => {
                    const {header, content} = userData[section];

                    return (<Col md={6} key={index}>
                            {header ? <HeaderSection titleHeader={header} /> : null}
                            <ContentSection content={content} section={section} />
                    </Col>
                    );
                })}
            </Grid>
        );
    }
}

export default connect(mapStateToProps)(Resume);