import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  console.log('client');

  return (
    <div className={styles.container}>
      <img src="mai_rub_roo.jpeg" alt="mai rub roo" />
      {posts.data && posts.data.map((post) => (
        <div key={post.id}>
          <h2>{post.attributes.speaker_name}</h2>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://strapi-dev.cariber.co/api/courses?populate=*');
    const data = await response.json();
    return { props: { courses: data } }
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: JSON.stringify(error)
      }
    };
  }
};