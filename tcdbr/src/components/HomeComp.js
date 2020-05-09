import React, { Component } from 'react';
import '../Fluent.css';
import '../App.css';
import { render } from '@testing-library/react';
import Latest from './LatestComp';
import CSS from './CSSComp';
import HTML from './HTMLComp';
import TopNav from './TopNavComp';
import Footer from './FooterComp';

class Home extends Component{
    render(){
        return(
            <div class="primary_white">
                <TopNav />
                <br /><br /><br /><br />
                <Latest />
                <br /><br /><br />
                <CSS />
                <br /><br /><br />
                <HTML />
                <br /><br /><br />
                <Footer />
            </div>
        );
    }
}

export default Home;