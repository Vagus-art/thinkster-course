import React from 'react'
import Banner from './Banner';
import MainView from './MainView';
import { connect } from 'react-redux';

export default function index() {
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
