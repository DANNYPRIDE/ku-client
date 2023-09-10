'use client'
import React, { useState } from 'react';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, isTeacher }),
      });

      if (loginResponse.ok) {
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
        <input
          name="이름"
          type="name"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
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