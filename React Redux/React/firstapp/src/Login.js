import { useState, useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";
import { basket } from ".";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const {set} = useContext(basket)

    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then(() => {
            navigate("/mobile")
            set(true)
        })
        .catch((err) => {
            alert("Login was not successful.", err)
        });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <br /> */}
            <button class="btn btn-primary" onClick={handleLogin}>Sign-in with Google</button>
        </div>
    );
};

export default Login