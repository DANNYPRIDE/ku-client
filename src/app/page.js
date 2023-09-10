import Image from 'next/image'
import styles from './page.module.css'
import Login from './login/page'
import Link from 'next/link'
import Register from './register/page'
import Posts from './post/page'
import LectureList from './LectureList'
import { cookies } from 'next/headers'

export default function Home() {
  
  let userId = cookies().get('X-KU-ID').value
  let sessionId = cookies().get('X-KU-SESSION').value
  let role = cookies().get('ROLE').value
  
  
  return (
    <div>
      <div>
        <h1> KU 수강 신청 </h1>
        <span><Link href= {(role == 'teacher') ? "/add/teacher" :"/add"} >➕추가</Link></span>
        <LectureList userId={userId} sessionId={sessionId} role={role} />
      </div>
    </div>
  )
}
