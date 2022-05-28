import { getUser } from '../api/apiCalls'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Input from '../components/Input';
import { updateUser } from '../api/apiCalls';

/*
*   Database'den parametrede {/user/{username}} belirtilen kullanıcı adıyla kullanıcı bilgilerini çeker.
*   Kullanıcı bilgilerini güncelleyip database e gönderir.
*   oluşturulan kullanıcılar {user1:user1} {user2:user2}
*/

const User = () => {
  const [user, setUser] = useState();
  const { username } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    console.log(user);
  });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getUser(username);
        setUser(response.data);
      } catch (error) { }
    };
    loadUser();
  }, [username]);

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setUser({
      ...user, [name]: value
    });
  };


  const onClickSave = async () => {
    const body = {
      name: user.name,
      phoneNumber: user.phoneNumber,
      school: user.school,
      experiences: user.experiences,
      skills: user.skills
    };
    try {
      await updateUser(username, body);
      setIsSuccess(true);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h1> Profile</h1>
      <div className="card text-center">
        <div className='form'>
          <Input name="name" label={"Name"} className="name" onChange={onChange} />
          <Input name="phoneNumber" label={"Phone Number "} className="phoneNumber" onChange={onChange} type="number" />
          <Input name="school" label={"School"} className="school" onChange={onChange} />
          <Input name="experiences" label={"Experiences "} className="experiences" onChange={onChange} />
          <Input name="skills" label={"Skills"} className="skills" onChange={onChange} />
          {user &&
            <div className="alert alert-info">
              <div className='card'>
                <ul>
                  <li>Name: {user.name}</li>
                  <li> Experiences: {user.experiences}</li>
                  <li> Phone Number: {user.phoneNumber}</li>
                  <li>School: {user.school}</li>
                  <li> Skills: {user.skills}</li>
                </ul>
              </div>
            </div>}
            {isSuccess && <div className="alert alert-success">Edit Successful </div>}
        </div>
        <button className='btn btn-success' onClick={onClickSave}>Edit</button>
      </div>
    </div >
  );
};

export default User;

