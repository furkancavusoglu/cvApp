import { getUser } from '../api/apiCalls'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Input from '../components/Input';
import { updateUser } from '../api/apiCalls';

const User = () => {
  const [user, setUser] = useState();
  const { username } = useParams();

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
          <Input name="phoneNumber" label={"Phone Number "} className="phoneNumber" onChange={onChange} />
          <Input name="school" label={"School"} className="school" onChange={onChange} />
          <Input name="experiences" label={"Experiences "} className="experiences" onChange={onChange} />
          <Input name="skills" label={"Skills"} className="skills" onChange={onChange} />
        </div>
        <button className='btn btn-success' onClick={onClickSave}>Edit</button>
      </div>
    </div >
  );
};

export default User;

