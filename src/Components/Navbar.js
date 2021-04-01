import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Account from './Account'
import Home from './Home'
import Login from './Login'
import Notecontainer from './Notecontainer'
import Notes from './Notes'
import Register from './Register'
import './style.css'

function Navbar(props) {
    const { toggle, handleAuth } = props
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand">User Auth</a>
                {/* <nav className="navbar "> */}
                <ul className="navbar-nav mr-auto" >
                    <li className="nav-item active"><Link className="nav-link" to='/'>Home</Link></li>
                    {
                        toggle ? (
                            <div className="navbar  ">
                                <React.Fragment>
                                    <li className="nav-item active"><Link className="nav-link" to='/account'>Account</Link></li>
                                    <li className="nav-item active"><Link className="nav-link" to='/notes'>Notes</Link></li>
                                    <li className="nav-item active"><Link className="nav-link" to='' onClick={() => {
                                        alert("successfully logged out")
                                        handleAuth()
                                        localStorage.removeItem('token')
                                        props.history.push('/')
                                    }}>Logout</Link> </li>
                                </React.Fragment>
                            </div>
                        ) : (
                            <div className="navbar navbar-expand-lg">
                                <React.Fragment>
                                    <li className="nav-item active"><Link className="nav-link" to='/register'>Register</Link></li>
                                    <li className="nav-item active"><Link className="nav-link" to='/login'>Login</Link> </li>
                                </React.Fragment>
                            </div>

                        )
                    }

                </ul>
            </nav>
            <Route path='/' exact component={Home}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' render={(props) => {
                return <Login
                    {...props}
                    handleAuth={handleAuth}
                />
            }}></Route>
            <Route path='/account' component={Account} />
            <Route path='/notes' component={Notecontainer} />
            {/* </nav> */}

        </div>

    )
}

export default withRouter(Navbar)
