import React, { Component } from 'react';
import '../Fluent.css';
import '../App.css';
import { render } from '@testing-library/react';

class CSS extends Component{

    render(){
        return(

            <div class="page_container">
                <h4>CSS 3 Videos</h4>
                <div class="horizontal" id="scroll" onmousewheel="scrleft(event);">
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/puY-kHvRXzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Introduction</p>
                    </div>
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/YK0kWp9iwRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Colors</p>
                    </div>
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/TwI8cw_SB0A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Borders and Dimensions</p>
                    </div>
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/f3zVcCPTuF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>The Box Model</p>
                    </div>
                </div>
                <button class="frost_container primary_inverted zi2">
                    <a href="https://www.youtube.com/watch?v=puY-kHvRXzQ&list=PLjO1SSHoUq9UdRvSFu2MDA2TqCBc0quLO" target="blank">
                        Watch all CSS Videos
                    </a>
                </button>
            </div>

        );
    }
}

export default CSS;