'use client'
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

export default function AddLecture(props){
  let {lectureName, lectureId}= props
  
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
      
      const loginResponse = await fetch('http://localhost:8080/v1/lectures/enroll', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({lectureId}),
      });
      if(loginResponse.status==200){
        
      }
      
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