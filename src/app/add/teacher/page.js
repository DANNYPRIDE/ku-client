'use client'
import React, { useState } from 'react';

import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

export default function Login(){
  const [lectureName, setName] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userId = parseInt(getCookie('X-KU-ID'))
    let sessionId = getCookie('X-KU-SESSION')
    let role = getCookie('ROLE')
    
   
    const headers = {
      'Content-Type': 'application/json',
      'X-KU-ID': userId,
       "Accept":'*/*',
      'X-KU-SESSION': sessionId,
      'ROLE': role,
      "Access-Control-Allow-Origin": "*/*",
      "Origin": "http://localhost:3000"
   };

    try {
      const loginResponse = await fetch('http://localhost:8080/v1/lectures', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({lectureName}),
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
          name="name"
          type="text"
          placeholder="제목"
          value={lectureName}
          onChange={(e) => setName(e.target.value)}
        />  
        <button type="submit">생성</button>
      </form>
</div>
  )
}