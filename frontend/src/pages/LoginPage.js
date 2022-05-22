import React, { Component } from "react";
import { login } from "../api/apiCalls";
import Input from "../components/Input";

class LoginPage extends Component {
    state = {
        username: null,
        password: null,
        pendingApiCall: false,
        errors: {}
    };

    onChange = (event) => {
        const { name, value } = event.target;
        const errors = { ...this.state.errors };
        errors[name] = undefined;
        this.setState({
            [name]: value,
            errors
        });
    };

    onClickLogin = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const body = {
            username,
            password
        };
        this.setState({ pendingApiCall: true });

        try {
            const response = await login(body);
        } catch (error) {
            if (error.response.data.validationErrors) {
                this.setState({ errors: error.response.data.validationErrors });
            }
        }
        this.setState({ pendingApiCall: false });
    };

    render() {
        const { pendingApiCall, errors } = this.state;
        const { username, password } = errors;
        return (<div>
            <div className="container">
                <form>
                    <h1 className="text-center">Login</h1>
                    <Input name="username" label="Username" error={username} onChange={this.onChange} />
                    <Input name="password" label="Password" error={password} onChange={this.onChange} type="password" />
                    <div>
                        <button className="btn btn-primary" onClick={this.onClickLogin} disabled={pendingApiCall}>Login</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default LoginPage;