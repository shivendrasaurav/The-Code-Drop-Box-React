import React, { Component } from 'react';
import '../Fluent.css';
import '../App.css';
import { render } from '@testing-library/react';

class Latest extends Component{
    render(){
        return(

            <div class="page_container">
                <h4>Latest Videos</h4>
                <div class="horizontal" id="scroll" onmousewheel="scrleft(event);">
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/8W9Pjhc4dGM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>CSS Project Part 1 - Dechat : Mobile First Chat Website</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Latest;