import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Hello World</h1>
        <Link href="/blog"><h2>Blogs Page</h2></Link>
        </div>
    </main>
  )
}
