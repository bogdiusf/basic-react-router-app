import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import User from './User'
import Settings from './Settings'
import styled from 'styled-components'

const Navbar = styled.div`
    background-color: red;
    padding: 10px;
    display: flex;
    align-items: center;

    > h1 {
        margin-left: 50px;
    }

`;

const Ul = styled.ul`
    display: flex;
    gap: 30px;
    margin-left: auto;
    margin-right: 50px;
    > li > .lnk {
        font-size: 25px;
        color: black;
    }
`;

const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: lightblue;
    font-size: 30px;
    font-weight: bold;
`;


function MainPage() {
    return (
        <Router>
            <div>
                <Navbar>
                    <h1>Navbar</h1>
                    <Ul>
                        <li><Link to={'/'} className="lnk">Home</Link></li>
                        <li><Link to={'/user'} className="lnk">User</Link></li>
                        <li><Link to={'/settings'} className="lnk">Settings</Link></li>
                    </Ul>
                </Navbar>



                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/user' component={User} />
                    <Route path='/settings' component={Settings} />
                </Switch>


                <Footer>
                    <p>This is a fixed footer and should be treated as such. *wink wink*</p>
                </Footer>
                
            </div>
        </Router>
    )
}


export default MainPage