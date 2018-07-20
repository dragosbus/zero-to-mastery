import React from 'react';


const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav className="navigation">
                <p onClick={()=>onRouteChange('signin')}>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav className="navigation">
                <p onClick={()=>onRouteChange('home')}>Sign In</p>
                <p onClick={()=>onRouteChange('register')}>Register</p>
            </nav>
        );
    }
};

export default Navigation;