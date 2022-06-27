import React,{useState,useContext, useEffect} from 'react'
import './Signup.css';
import {FcGoogle} from 'react-icons/fc'
import { Link, Route } from "react-router-dom";
import { signInWithGoogle } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from 'react-router-dom';

function Signup (){

 
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [signedIn,setSignedIn] = useState(false);

  const register = async () => {
     try {
       const user = await createUserWithEmailAndPassword(
         auth,
        registerEmail,
        registerPassword
       );
      console.log(user);
     }catch (error) {
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
  
  return (
    <>
    <div className='signup-page' style={{height:"100vh"}}>
        <div className="signup-main">
            <div className="signup-text">
                <h1 className='signup-h1'>Create an account now</h1>
                <p className="signup-p">Aready have an account? <Link to="/login" className='signup-link'>Login Now</Link></p>
            </div>

                <input type="text" id="name1" placeholder="Name" name="name1" className='inp'/>


                 <input type="email" id="email1" placeholder="Email" name="email1" className='inp' onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}/>
                <input type="text" id="contact" placeholder="Contact" name="contact" className='inp'/>
                <input type="password" id="password2" placeholder="Password" name="password2" className='inp' onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}/> 
                <input type="password" id="password3" placeholder="Confirm Password" name="password3" className='inp'/>
            <div>
                <button className="signup-button">Sign Up</button>
                <button
            className="login-google"
            value="submit"
            onClick={handleSignUp}
          >
            <FcGoogle className="google-icon" />
            Sign Up with Google
          </button>
            </div>
            {/* <br/> */}
        </div>
</div>
</>
  )
}

export default Signup;
