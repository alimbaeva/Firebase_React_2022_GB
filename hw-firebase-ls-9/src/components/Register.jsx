import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/action'

const Register = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const navigate = useNavigate();


    const hendleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    }

    useEffect(() => {
        if (user) {
            navigate('/welcome')
        }
    }, [navigate, user])


    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={hendleSubmit}>
                <input value={displayName} onChange={e => setDisplayName(e.target.value)} />
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <input value={password} onChange={e => setPassword(e.target.value)} />
                <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />

                <button type={'submit'}>Save</button>
            </form>
        </div>
    )
}

export default Register