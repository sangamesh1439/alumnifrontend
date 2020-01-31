import React from "react";
import { Button } from 'react-bootstrap';

class LoginComponent extends React.Component {

    state = {
        username:"user1",
        password:"abcxyz"
    }
    render = () => {
        console.log('this state', this.state);
        return (
            <div>
                Username: <input value={this.state.username} type="text" onChange={(e) => {
                    this.setState({ username: e.target.value });
                }} />
                password: <input   value={this.state.password} type="text" onChange={(e) => {
                    this.setState({ password: e.target.value });
                }} />
                <Button
                    variant="primary"
                    onClick={async () => {
                        let r = await fetch('http://127.0.0.1:5000/auth', {method:"POST", body:this.state});
                        console.log('r',await r.json());
                    }}  
                ></Button>
            </div>
        )
    }
}

// Redux code to connect 
export const Login = LoginComponent;