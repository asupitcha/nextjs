import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home({ posts }) {
  console.log('client');

  return (
    <div className={styles.container}>
      {posts.data && posts.data.map((post) => (
        <div key={post.id}>
          <h2>{post.attributes.Title}</h2>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // get data from api
  const res = await fetch('http://localhost:1337/api/posts?populate=*')
  const posts = await res.json();
  return {
    props: { posts }
  }
}