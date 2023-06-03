import React from 'react';
import "./HamburgerMenuStyle.css"

const HamburgerMenu = ({toggle, ClassName}) => {
    return (
        <div className={ClassName} onClick={toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    );
};

export default HamburgerMenu;