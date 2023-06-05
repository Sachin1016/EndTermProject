import React from 'react'
import './Auth.css'
import Logo from './logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className='a-Left'>
            <img src={Logo} alt="" />
            <div className='Webname'>
                <h1>SK Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
            {/* <SignUp/> */}
            <LogIn/>
    </div>
  )
}

function LogIn(){
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>


                <h3>Log In</h3>


                <div>
                    <input type='text' placeholder='Username' className='infoInput' name='username' />
                </div>

                <div>
                    <input type='password' placeholder='Password' className='infoInput' name='password' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account. Sign Up!</span>
                </div>
                <button className='button infoButton' type='submit'>Login</button>
            </form>
        </div>
    )
}


function SignUp(){
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>


                <h3>Sign up</h3>

                <div>
                    <input type='text' placeholder='First Name' className='infoInput' name='firstname' />

                    <input type='text' placeholder='Last Name' className='infoInput' name='firstname' />

                </div>

                <div>
                    <input type='text' placeholder='Username' className='infoInput' name='username' />
                </div>

                <div>
                    <input type='password' placeholder='Password' className='infoInput' name='password' />

                    <input type='password' placeholder='Confirm Password' className='infoInput' name='confirmpass' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
                </div>
                <button className='button infoButton' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth