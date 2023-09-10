'use client'
import React, { useState } from 'react';

import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, isTeacher }),
      });

      if (loginResponse.ok) {
        const sessionData = await loginResponse.json();

        // Set a cookie with the session data
        setCookie("X-KU-ID", sessionData.userId)
        setCookie("X-KU-SESSION", sessionData.id)
        let role
        if (isTeacher == true){
          role = 'teacher'
        } else { 
          role= 'student'
        }

        setCookie("ROLE",role)
        window.location.href = '/';
      }  
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return(
    <div>
   <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="비번"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={isTeacher}
            onChange={() => setIsTeacher(!isTeacher)}
          />
          Teacher
        </label>
        <button type="submit">id/pw 가입요청</button>
      </form>
</div>
  )
}