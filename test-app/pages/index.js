import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={ styles.container } data-testid="hello">
      Welcome
        <h2 className={ styles.title }>
        learn react
        <br />
        Welcome to
        <br />
        <a href="https://nextjs.org">Next.js !</a>
      </h2>
      <button>こんちわ</button>
    </div>
  )
}
