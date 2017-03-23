import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './style.less';
// import NewsItem from '../../components/NewsItem';
// import SiteItem from '../../components/SiteItem';
// import InputText from 'common/components/InputText';
// import Button from 'common/components/Button';
// import Preloader from 'common/components/Preloader';
import { Button, Panel, Col, Grid, Row} from 'react-bootstrap';

function mapStateToProps (state) {
    return {
        newsList: state.newsList,
        newsListLoad: state.newsListLoad,
        newsFilter: state.newsFilter,
        newsSiteListLoad: state.newsSiteListLoad,
        newsSiteListFilter: state.newsSiteListFilter,
        newsSiteList: state.newsSiteList,
    };
}
//
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        // newsSetFilter,
        // getNewsList,
        // getSiteList,
        // resetListNews,
    }, dispatch);
}

class AddressBook extends Component {
    static propTypes = {
        newsList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                preview: PropTypes.string,
            }),
        ),
        newsSiteList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                description: PropTypes.string,
                url: PropTypes.string,
                logo: PropTypes.string,
            }),
        ),
        newsFilter: PropTypes.string,
        newsSetFilter: PropTypes.func,
        newsListLoad: PropTypes.bool,
        getNewsList: PropTypes.func,
        getSiteList: PropTypes.func,
        resetListNews: PropTypes.func,
    };

    // изменение строки поиска
    changeFilter (e) {
        const filterValue = e.target.value.toLowerCase();
        this.props.newsSetFilter(filterValue);
    }

    // поиск фразы внутри строки
    search (string = '', query = '') {
        return string.toLowerCase().includes(query);
    }

    render () {
        const {newsList, newsListLoad, newsFilter, getNewsList, getSiteList, newsSiteList} = this.props;
        const filteredNews = newsList.filter((news) => {
            return this.search(news.title, newsFilter) || this.search(news.preview, newsFilter);
        });

        return (
            <Grid>
                <Row className="show-grid">
                    <Col lg={12}>
                         <Panel header='Address Book' bsStyle="primary">
                           <Button bsStyle="success">Создать контакт</Button>
                            <form id="search">

                            </form>
                        </Panel>

                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);