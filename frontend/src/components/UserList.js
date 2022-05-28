import React, { Component } from 'react'
import { getUsers } from '../api/apiCalls';

// Admin componentinde kullanılan kullanıcıları listeleyen componenttir.

export default class UserList extends Component {
    state = {
        users: []
    };
    componentDidMount() {
        getUsers().then((response) => {
            this.setState({
                users: response.data
            });
        });
    };
    render() {
        const { users } = this.state;
        return (
            <div className="card">
                {
                    users.map(user => (
                        <div id='accordion' key={user.username}>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"  aria-controls="collapseOne">
                                            {user.name}
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show"  data-parent="#accordion">
                                    <div className="card-body">
                                        <div className='card'>
                                            <ul>
                                                <li>Name: {user.name}</li>
                                                <li> Experiences: {user.experiences}</li>
                                                <li> Phone Number: {user.phoneNumber}</li>
                                                <li>School: {user.school}</li>
                                                <li> Skills: {user.skills}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>))}
            </div>

        );
    }
}

