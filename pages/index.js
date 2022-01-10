import styles from '../styles/Home.module.css'
import Img from "../component/image"

export default function Home({ courses }) {
  console.log('client');

  return (
    <div className={styles.container}>
      <Img className="logo-image"
        src="/mai_rub_roo.jpeg" alt="mai rub roo"
        width={40}
        height={39.9667} />
      {courses.data && courses.data.map((post) => (
        <div key={post.id}>
          <h2>{post.attributes.speaker_name}</h2>
          <Img className="feature-image"
            src={'http://18.219.15.34:1337' + post.attributes.thumbnail.data.attributes.url}
            alt={post.attributes.thumbnail.data.attributes.name}
            width={262.5}
            height={147.65} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://18.219.15.34:1337/api/courses?populate=*');
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