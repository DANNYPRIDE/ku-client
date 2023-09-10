import { cookies } from "next/headers";
import { setCookie,deleteCookie } from "cookies-next";
import { Redirect } from "next";
export default async function Loggout(){
  deleteCookie('ROLE')
  deleteCookie('X-KU-SESSION')
  deleteCookie('X-KU-ID')

  return(
    <div>
      <h1> 쿠키 제거 </h1>
    </div>
  )
}