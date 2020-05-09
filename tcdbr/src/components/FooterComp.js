import React, { Component } from 'react'
import '../Fluent.css'

class Footer extends Component{
    
    render(){
        return(
            <div class="pivot_container large12 medium12 small12 primary_inverted foot zi2">
                Get connected with <b>The Code Drop</b> on these Platforms<br /><br />
                <a href="https://www.youtube.com/channel/UCnEIkvnbpbQyetPk_K9QNQg?sub_confirmation=1">
                    <button class="yt">YouTube</button>
                </a>
                <a href="https://www.instagram.com/thecodedrop/">
                    <button class="ig">Instagram</button>
                </a>
                <a href="https://github.com/shivendrasaurav/The-Code-Drop-HTML">
                    <button class="gh">GitHub</button>
                </a>
                <br /><br />
                <p>&copy; The Code Drop 2020</p>
            </div>
        );
    }

}

export default Footer;