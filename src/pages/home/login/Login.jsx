import React, { useState } from 'react'
import Helmet from '../../../components/helmet/Helmet';
import Signup from '../signup/Signup';


import './login.css'
function Login() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [moon, setMoon] = useState(false);
  const [loading, setLoading] = useState(false)

    const colorTheme = () =>{
        setMoon(!moon);
        document.getElementById('banner').classList.toggle('banner')
        document.getElementById('banner').classList.toggle('banner2')
    }

    const formBx = document.querySelector('.formBx');
     //function to permute signin to signup
  const handleSignup = function () {
    let sign = document.querySelector('.sign')
    let formBx = document.querySelector('.formBx');
    
    formBx.classList.add('activer');
    sign.classList.add('activer');
    if (formBx.classList.contains('desactiver')) {
      formBx.classList.toggle('desactiver');
    }
  }
  //function to permute signup to signin
  const handleSignin = function () {
    let sign = document.querySelector('.sign')
    let formBx = document.querySelector('.formBx');

    formBx.classList.remove('activer');
    sign.classList.remove('activer');
    formBx.classList.add('desactiver');
  }

  return (
    <Helmet title="Login">
      <div>
        <div className="sign">
          <div className="contain">
            <div className="blueBg">
              <div className="boxe signin">
                <h2 className="">Already Have An Account ?</h2>
                <button onClick={handleSignin} className="signinBtn">
                  Sign In
                </button>
              </div>
              <div className="boxe signup ">
                <h2>Don't Have An Account ?</h2>
                <button onClick={handleSignup} className="signupBtn">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="formBx">
              <div className="form signinForm">
                <form>
                  <div className="formGroup">
                    <p className="text_form">Username</p>
                    <input
                      type="email"
                      name="email"
                      value={loginEmail}
                      required
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="Online"
                    />
                    <i class="ri-user-fill"></i>
                  </div>
                  <div className="formGroup">
                    <p className="text_form">Password</p>
                    <input
                      type="password"
                      name="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="......"
                    />
                    <i class="ri-mail-fill"></i>
                    <input
                      type="submit"
                      name="submit"
                      required
                      className="btnSingin"
                      value="Singn In"
                    />
                  </div>
                  <a href="#" className="forgot">
                    Forget Password
                  </a>
                </form>
              </div>

              <Signup setLoading={setLoading} />
             
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Login