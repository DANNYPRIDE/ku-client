import { cookies } from "next/headers";
import AddLecture from "./AddLecture";
export default async function Add(){
  
  let userId = cookies().get('X-KU-ID')
  let sessionId = cookies().get('X-KU-SESSION')
  let role = cookies().get('ROLE')

  const headers = {
      
      'X-KU-SESSION': sessionId.value,
      'ROLE': role.value
    };
  
  const response = await fetch('http://localhost:8080/v1/lectures/all', {
      method: 'GET',
      headers: headers,
    })
    const result = await response.json()

    
  
  return(
    <div className="list">
    {Array.isArray(result) ? (
        result.map((lecture, i) => (
          <div key={i} className="element">
            <span>수업: {lecture.name}, </span>
            <span>교수자: {lecture.teacherName}</span>          
            <AddLecture lectureName={lecture.name} lectureId={lecture.id} > </AddLecture>
    
          </div>
        ))
      ) : (
        <div>No lectures found</div>
      )}
  </div>
  )
}