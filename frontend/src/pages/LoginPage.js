import React, { Component } from "react";

class LoginPage extends Component {

    onChange() {

    }

    onClick() {

    }


    render() {
        return (<div>
            <div className="container">
                <form>
                    <h1 className="text-center">Login</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" name="username" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="username" onChange={this.onChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.onClick}>Login</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default LoginPage;