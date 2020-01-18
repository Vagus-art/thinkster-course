import React,{useEffect} from 'react'
import Banner from './Banner';
import MainView from './MainView';
import { connect } from 'react-redux';
import agent from '../../agent';

const Promise = global.Promise;

const mapStateToProps = state => ({
    appName: state.appName,
    articles: state.articles
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'HOME_PAGE_LOADED', payload})
});


const Home = (props) => {
    useEffect(()=>{
        props.onLoad(agent.Articles.all());
    })
    return (
        <div className="home-page">
            <div className="container page">
            <div className="row">
                <MainView />
                <div className="col-md-3">
                <div className="sidebar">

                    <p>Popular Tags</p>

                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
