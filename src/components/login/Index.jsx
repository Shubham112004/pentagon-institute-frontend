import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className='login-bg row'>
            <div className='login-left-side col-md-6'>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <img src={logo} alt="" />
                    <div>
                        <h2>PENTAGON</h2>
                        <h4>Career Institute</h4>
                    </div>
                </div>
            </div>
            <div className='login-right-side col-md-6'>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <form>
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="" placeholder='Enter your username' className='form-control' />
                        <label htmlFor="" className='mt-3'>Password</label>
                        <input type="text" name="" id="" placeholder='Enter your password' className='form-control mb-3' />
                        <Link>Forgot Username or Password?</Link>
                        <button className='btn'>Login</button>
                        <span className='d-flex justify-content-center mb-3'>or</span>
                        <Link to="/" className='d-flex justify-content-center fw-semibold' style={{ color: '#451f44', textDecoration: 'underline' }}>Explore Pentagon!</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index