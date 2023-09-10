import PostList from "./PostList"
import { cookies } from "next/headers"

export default function Posts(){
  let userId = cookies().get('X-KU-ID').value
  let sessionId = cookies().get('X-KU-SESSION').value
  let role = cookies().get('ROLE').value


  return(
    <div>
      <h1>게시글</h1>
      <PostList userId={userId} sessionId={sessionId} role={role} />
    </div>
  )
}