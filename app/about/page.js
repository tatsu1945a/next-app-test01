
import Link from "next/link"
import Image from "next/image"


export const metadata = {
  title: 'test about',

}

export default function Page() {
  return (
    <>
      <h1>about</h1>
      <p>aaaa</p>
      <p>{1 +2}</p>
      <p><Link href="/">top go</Link></p>
    </>
  )  
}