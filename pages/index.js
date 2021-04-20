import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Hunter</title>
      </Head>

      <main className={styles.main} />

      <footer className={styles.footer} />
    </div>
  );
}
