import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [validData, setValidData] = useState({validEmail:false, validPassword:false});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const emailValidation = (type, value) => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        const pwdRegex =/[A-Za-z0-9]{7,13}$/
        if(type === 'email'){
            setEmail(value);
            if (regEx.test(value)) {
                setValidData({...validData, validEmail:true})
            } else {
                setValidData({...validData, validEmail:false})
            }
        }
       if(type === 'pass'){
        setPass(value);
       
        if(pwdRegex.test(value)){
            setValidData({...validData, validPassword:true})
        } else {
            setValidData({...validData, validPassword:false})
        }
      }
      }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)}   id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => emailValidation('email', e.target.value)} type="email"     placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => emailValidation('pass', e.target.value)}type="password"     placeholder="********" id="password" name="password" />
            {validData.validEmail && validData.validPassword && <button type="submit" >Register</button>}
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}