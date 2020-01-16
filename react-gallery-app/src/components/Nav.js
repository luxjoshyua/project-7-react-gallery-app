import React from "react";

const Nav = () => {
    return (
        <nav class="main-nav">
            <ul>
                {/* make these links dynamic */}
                <li><a href='#'>Cats</a></li>
                <li><a href='#'>Dogs</a></li>
                <li><a href='#'>Computers</a></li>
            </ul>
        </nav>
    )
}

export default Nav; 