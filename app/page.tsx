import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My App</h1>
        <p className={styles.description}>Discover the beauty of simplicity</p>
        <div className={styles.imageWrapper}>
          <Image
            src="/cat.jpg"
            alt="Cute cat"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <button className={styles.button}>
          <a href="https://www.google.com" target="_blank">Get Started</a>
          </button>
      </div>
    </main>
  );
}