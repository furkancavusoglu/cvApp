import React, { Component } from "react";
import { login } from "../api/apiCalls";
import Input from "../components/Input";
import User from "./User";
import { useNavigate } from "react-router-dom";
class LoginPage extends Component {
    state = {
        username: null,
        password: null,
        pendingApiCall: false,
        errors: {},
        auth: null
    };


    onChange = (event) => {
        const { name, value } = event.target;
        const errors = { ...this.state.errors };
        errors[name] = undefined;
        this.setState({
            [name]: value,
            errors,
            auth: null
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
            await login(body);
            let history = useNavigate();
            history.push("/user");

        } catch (apiError) {
            if (apiError.response.data.validationErrors) {
                console.log(apiError);
                this.setState({ errors: apiError.response.data.validationErrors });
            }
            if (apiError.response.data.message === "Unauthorized request") {
                this.setState({ auth: apiError.response.data.message });
            }
        }
        this.setState({ pendingApiCall: false });
    };

    render() {
        const { pendingApiCall, errors, auth, user } = this.state;
        const { username, password } = errors;
        const buttonEnabled = this.state.username && this.state.password;
        console.log(user);
        return (<div>
            <div className="container">
                <form>
                    <h1 className="text-center">Login</h1>
                    <Input name="username" label="Username" error={username} onChange={this.onChange} />
                    <Input name="password" label="Password" error={password} onChange={this.onChange} type="password" />
                    {auth && <div className="alert alert-danger">{auth}</div>}
                    <div>
                        <button className="btn btn-primary" onClick={this.onClickLogin} disabled={pendingApiCall || !buttonEnabled}>Login</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default LoginPage;