import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './style.styl';
import { Button, Panel, Col, Grid, Row} from 'react-bootstrap';
import HeaderSection from 'resume/components/HeaderSection';

 function mapStateToProps (state) {
    return {
        userData: state.userData,
    };
 }

class Resume extends Component {
    static propTypes = {
        newsList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                preview: PropTypes.string,
            }),
        ),
    };


    render () {
        const {} = this.props;

        return (
            <Grid>
                <HeaderSection titleHeader="Title" />
            </Grid>
        );
    }
}

export default connect(mapStateToProps)(Resume);