import React from 'react';

const SignIn = ({onRouteChange}) => (
    <div className="signin">
        <h2>Sign In</h2>
        <form>
            <div>
                <label htmlFor={'email'}>Email</label>
                <input id="email" type="email"/>
            </div>
            <div>
                <label htmlFor={'password'}>Password</label>
                <input id="password" type="password"/>
            </div>
            <button onClick={()=>onRouteChange('home')} type="submit">Sign In</button>
        </form>
        <a onClick={()=>onRouteChange('register')}>Register</a>
    </div>
);


export default SignIn;