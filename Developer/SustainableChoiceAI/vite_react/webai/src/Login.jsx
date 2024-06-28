import react as 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}