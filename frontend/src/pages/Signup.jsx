import React from 'react'
import { useState } from 'react'
import { Heading } from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import axios from "axios";
import { useNavigate } from 'react-router-dom'



export const Signup = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  
  const API_URL = import.meta.env.VITE_BACKEND_URL

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center '>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox onChange={(e) => {
              setFirstName(e.target.value)
            }} label={"First Name"} placeholder={"Aashir"} />
            <InputBox onChange={(e) => {
              setLastName(e.target.value)
            }} label={"Last Name"} placeholder={"Haris"} />
            <InputBox onChange={(e)=> {
              setUsername(e.target.value)
            }} label={"Email"} placeholder={"aashir@gmail.com"} />
            <InputBox onChange={(e) => {
              setPassword(e.target.value)
            }} label={"Password"} placeholder={"123456"} />
            <InputBox onChange={(e) => {
              setPhoneNumber(e.target.value)
            }} label={"Phone Number"} placeholder={"+91 9936000032"} />
            <Button onClick={async () => {
              const response = await axios.post(`${API_URL}/api/v1/user/signup` , {
                username,
                firstName,
                lastName,
                password,
                phoneNumber
              });
              console.log(response.data);
              localStorage.setItem('token' , response.data.token)
              // localStorage.setItem('userId' , response.data)

              if(response) {
                navigate('/signin',{replace: true})
              }
              
            }} label={"Sign Up"} />
            <BottomWarning label={"Already have an account"} buttonText={"Sign in"} to={'/signin'}/>
        </div>
      </div>
    </div>
  )
}

