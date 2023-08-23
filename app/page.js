import './styles/styles.scss'
import Link from "next/link"
import Image from "next/image"
import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <h1 className={styles.sitetile}>aaaaa</h1>
      <Image src="/images/next.svg" width={150} height={60} alt="next.js" />
      <p>aaaa</p>
      <p>{1 +2}</p>
      <p><Link href="about">about go</Link></p>
    </>
  )  
}