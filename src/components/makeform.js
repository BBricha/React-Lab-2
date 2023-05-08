import React, { useState } from 'react';

const Form = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputUsername = (e) => {
        setUsername(e.target.value);
    };

    const inputEmail = (e) => {
        setEmail(e.target.value);
    };

    const inputPassword = (e) => {
        setPassword(e.target.value);
    };

    const submitButton = (e) => {
        e.preventDefault();
        console.log('Form data:', { username, email, password });
    };

    return (
        <form>
            <label>
                Username:
                <input value={username} onChange={inputUsername} />
            </label>
            <br />
            <label>
                Email:
                <input  value={email} onChange={inputEmail} />
            </label>
            <br />
            <label>
                Password:
                <input  value={password} onChange={inputPassword} />
            </label>
            <br />
            <button onClick={ submitButton}>Submit</button>
        </form>
    );
}
export default Form;
