import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Screenshot Essays</title>
        <meta name="description" content="See the best of FC screenshots here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Screenshot Essays
        </h1>
        <h1 className={styles.title}>
          Coming soon!
        </h1>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/sjwhitmore/screenshot-caster"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check us out on GitHub
        </a>
      </footer>
    </div>
  )
}
