import React, {useState} from "react";
import './Login.css';
import axios from "axios";

const Login = (props) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': 'a40726f6-1b9e-4bd2-a8ea-43fbd5ffa8db',
            'User-Name': user,
            'User-Secret': password,
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            setError(false);
            sessionStorage.setItem("name", user);
            sessionStorage.setItem("password", password);
            window.location.reload();
        } catch (e) {
            setError(true);
        }
    }


    return (
        <div className="login" style={{backgroundImage: "url(/bg1.jpg)"}}>>
            <div className="login-form">
                <div className="login-icon">
                    <img src="/login_icon.png" alt="Login"/>
                </div>
                {error ?
                    <p style={{ color: '#aeabab',marginTop:'0px'}}>
                        Invalid credentials
                    </p> : ''}
                <form onSubmit={handleSubmit} spellCheck="false">
                    <div>
                        <input className="form-user" type="text" value={user} onChange={(e) => setUser(e.target.value)}
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               placeholder="name" required/>
                    </div>
                    <div>
                        <input className="form-password" type="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="password" required/>
                    </div>
                    <button className="form-button" type="submit">Login</button>
                </form>
                <div className="copyright">
                    <p style={{color: '#8e8c8c',fontSize:'small'}}>
                        Copyright © <a href="https://github.com/msmmanoj?tab=repositories">Manoj Malepati </a> 2021.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;