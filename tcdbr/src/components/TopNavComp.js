import React, { Component } from 'react'
import '../Fluent.css'

class TopNav extends Component{
    
    render(){
        return(
            <div class="pivot_container large12 medium12 small12 primary_inverted nav zi2">
                <button class="icon rot primary_inverted">|||</button>
                <a class="pivot_button">The Code Drop Box</a>
            </div>
        );
    }

}

export default TopNav;