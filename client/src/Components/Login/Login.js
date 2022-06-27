import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { signInWithGoogle } from "../../Firebase";
import {useNavigate} from"react-router-dom";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase";

function Login() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try{
       signInWithGoogle();
      }catch(err){
        console.log(err.message);
      }
      setTimeout(navigation,10000);
  }

  const navigation = () => {
    navigate("/dashboard");
  }

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="login-bg">
        <div className="login-content">
          <div className="login-welc"> Welcome Back! </div>
          <div className="login-subhead">
            Not a member?{" "}
            <Link to="/signup" className="login-signUp">
              Sign Up!
            </Link>
          </div>
          <input
            type="email"
            className="email-login-input"
            placeholder="Email"
            value={loginEmail}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            className="password-login-input"
            placeholder="Password"
            value={loginPassword}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button
            type="submit"
            className="btn-input"
            value="Submit"
            onClick={login}
          >
            Log In
            {/* <Link to="/dashboard" className="login-button"> Log in </Link> */}
          </button>
          <button
            type="submit"
            className="login-google"
            value="submit"
            onClick={handleSignUp}
          >
            <FcGoogle className="google-icon" />
            Log in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
