import React from 'react';


const Register = ({onRouteChange}) => (
    <div className="register">
        <h2>Register</h2>
        <form>
            <div>
                <label htmlFor={'email'}>Email</label>
                <input id="email" type="email"/>
            </div>
            <div>
                <label htmlFor={'password'}>Password</label>
                <input id="password" type="password"/>
            </div>
            <button onClick={()=>onRouteChange('signin')} type="submit">Register</button>
        </form>
    </div>
);

export default Register;