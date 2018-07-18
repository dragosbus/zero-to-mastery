import React from 'react';


const Navigation = ({onRouteChange}) => (
    <nav className="navigation">
        <p onClick={()=>onRouteChange('signin')}>Sign Out</p>
    </nav>
);

export default Navigation;