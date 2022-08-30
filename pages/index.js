import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { ocr } from './api/ocr'

export default function Home({ data, query }) {

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
        <p className="mb-3">Paste an imgur of a screenshot essay and see the result below.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            query = e.target.text.value
            data = ocr(query)
          }}
        >
          <div className="input-group">
            <input type="text" name="text" placeholder="https://i.imgur.com/YUTCnMi.jpg" />
            <input type="submit" value="OCR Me" />
          </div>
        </form>
        {data && data.text.length > 0 && (
           <div className="results">
              {data.text}
           </div>
        )}

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
