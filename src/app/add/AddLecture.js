'use client'
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

export default function AddLecture(props){
  let {lectureName}= props
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userId = getCookie('X-KU-ID')
    let sessionId = getCookie('X-KU-SESSION')
    let role = getCookie('ROLE')
    console.log(userId)
   
    const headers = {
      'Content-Type': 'application/json',
      'X-KU-ID': userId,
       "Accept":'*/*',
      'X-KU-SESSION': sessionId,
      'ROLE': role,
      "Access-Control-Allow-Origin": "*/*",
      "Origin": "http://localhost:3000"
   };

   console.log(headers)

    try {
      
      const loginResponse = await fetch('http://localhost:8080/v1/lectures', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({lectureName}),
      });
      console.log(loginResponse)
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    
    <div>
      <input type="button" onClick={handleSubmit}></input>
    </div>
  )
}