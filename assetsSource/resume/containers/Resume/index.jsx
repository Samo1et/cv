import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './style.styl';
import {Col, Grid, Row, Button, ButtonToolbar} from 'react-bootstrap';
import HeaderSection from 'resume/components/HeaderSection';
import ContentSection from 'resume/components/ContentSection';
import {getUserData, getDefaultData} from '../../redux/actions';

function mapStateToProps (state) {
    return {
        userData: state.userData,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserData,
        getDefaultData
    }, dispatch);
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
        const {userData, getUserData, getDefaultData} = this.props;
        return (
            <Grid>
                <div className="btnWrapper">
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={() => getUserData()} >Samoilis</Button>
                        <Button bsStyle="primary" onClick={() => getDefaultData()} >Default Resume</Button>
                    </ButtonToolbar>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Resume);