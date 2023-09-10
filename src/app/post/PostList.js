export default async function PostList(props){
  let {userId, sessionId, role} = props

  const headers = {
    'X-KU-ID': parseInt(userId),
    'X-KU-SESSION': sessionId,
    'ROLE': role
  };
  
  
  
  const response = await fetch('http://localhost:8080/api/v1/post', {
    method: 'GET',
    headers: headers,
  })
  console.log(response)
  const result = await response.json()
  
  console.log(result)

  return(
    <div className="list">
    {Array.isArray(result) ? (
        result.map((post, i) => (
          <div key={i} className="element">
            <span>제목: {post.name}, </span>
            <span>교수자: {post.teacherName}</span>
          </div>
        ))
      ) : (
        <div>No posts found</div>
      )}
  </div>
  )
}