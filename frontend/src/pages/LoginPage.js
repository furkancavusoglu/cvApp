import React, { Component } from "react";
import { login } from "../api/apiCalls"

class LoginPage extends Component {
    state = {
        username: null,
        password: null,
        pendingApiCall: false
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onClickLogin = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const body = {
            username,
            password
        }
        this.setState({ pendingApiCall: true });

        try {
            const response = await login(body)
        } catch (error) {
        }
        this.setState({pendingApiCall:false});
    };

    render() {
        const {pendingApiCall} = this.state;
        return (<div>
            <div className="container">
                <form>
                    <h1 className="text-center">Login</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" name="username" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="password" type="password" onChange={this.onChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.onClickLogin} disabled={pendingApiCall}>Login</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default LoginPage;