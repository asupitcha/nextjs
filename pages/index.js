import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home({ posts }) {
  console.log('client');

  return (
    <div className={styles.container}>
      Test Next.js
    </div>
  )
}