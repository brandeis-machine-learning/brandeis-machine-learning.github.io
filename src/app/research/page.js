import Link from 'next/link';
import Image from 'next/image';
import { areas } from '@/data/home';
import styles from '../interior.module.css';

export default function Research() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Liu Lab · Brandeis University</p>
          <h1>Research</h1>
        </div>
      </header>
      <div className={styles.previews}>
        <section
          id="data-centric-learning"
          className={styles.preview}
          aria-labelledby="data-centric-title"
        >
          <div className={styles.previewGrid}>
            <article>
              <h2 id="data-centric-title">
                <Link href="/research/data-centric-learning">
                  Data Centric Learning
                </Link>
              </h2>
              <p>
                Exploring how data-centric approaches improve model performance
                and reduce bias.
              </p>
              <Link
                className={styles.link}
                href="/research/data-centric-learning"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </article>
            <Link
              href="/research/data-centric-learning"
              className={styles.figure}
              aria-label="Read Data Centric Learning"
            >
              <Image
                src="/data-centric.png"
                alt="Data Centric Learning research illustration"
                fill
                sizes="(max-width: 760px) 100vw, 500px"
              />
            </Link>
          </div>
        </section>
        <section
          className={`${styles.preview} ${styles.otherResearch}`}
          aria-labelledby="other-research-title"
        >
          <h2 id="other-research-title">Other Research Areas</h2>
          <ul className={styles.researchTopics}>
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
