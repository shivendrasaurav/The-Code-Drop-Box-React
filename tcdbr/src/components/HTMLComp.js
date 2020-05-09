import React, { Component } from 'react';
import '../Fluent.css';
import '../App.css';
import { render } from '@testing-library/react';

class HTML extends Component{

    render(){
        return(

            <div class="page_container">
                <h4>HTML 5 Videos</h4>
                <div class="horizontal" id="scroll" onmousewheel="scrleft(event);">
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/Gl2QEPdm_qY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Setting up the Environment</p>
                    </div>
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/tcePlncF6tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Structure of a Webpage</p>
                    </div>
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/pk3kId6Sj84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>The Head Tag</p>
                    </div>
                    <div class="tab large3">
                        <iframe class="skeumorphic" width="320px" height="180px" src="https://www.youtube.com/embed/MHA9AJe4CYE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Typography</p>
                    </div>
                </div>
                <button class="frost_container primary_inverted zi2">
                    <a href="https://www.youtube.com/watch?v=Gl2QEPdm_qY&list=PLjO1SSHoUq9W2XvL89RDli-bqwIpRD-kb" target="blank">
                        Watch all HTML Videos
                    </a>
                </button>
                <br />
                <br />
            </div>

        );
    }
}

export default HTML;