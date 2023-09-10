export default async function LectureList(props){
  let {userId, sessionId, role} = props

  
    // Replace with your actual header values
    const headers = {
      'X-KU-ID': parseInt(userId),
      'X-KU-SESSION': sessionId,
      'ROLE': role
    };
    
    
    const response = await fetch('http://localhost:8080/v1/lectures', {
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
            </div>
          ))
        ) : (
          <div>No lectures found</div>
        )}
    </div>
  )
}