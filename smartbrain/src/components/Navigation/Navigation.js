import React from 'react';


const Navigation = ({onChangeRoute}) => (
    <nav className="navigation">
        <p onClick={()=>onChangeRoute('signin')}>Sign Out</p>
    </nav>
);

export default Navigation;