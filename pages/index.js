import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export async function getInitialProps(context) {
  if (context.req) {
    // Fetch data from the JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // Pass data as props to the page component
    return {
      props: { data },
    };
  } else {
    // If the page is being requested client-side,
    // use Client-side Rendering mode.
    return { props: {} };
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>getInitialProps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
