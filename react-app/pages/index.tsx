import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
        <form action="/api/form" method="post">
      <label htmlFor="module">Search Module</label>
      <div></div>
      <input type="text" id="module" name="module" required />
      <button type="submit">Submit</button>
    </form>
        </div>

        <div className={styles.grid}>
          <a 
            href="/subpages/search"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Upload <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Upload a new Github or npm module to be evaluated by our system.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Update <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Update a current modules scores or have it be reevaluated
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Rate <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Rate existing projects
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Download <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Download highly rated modules
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
