import Image from 'next/image';
import Link from 'next/link';
import { areas, homeCopy } from '@/data/home';
import styles from './page.module.css';

export const metadata = { title: "Hongfu Liu's Research Lab" };

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-b-title">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Brandeis University</p>
          <h1 id="home-b-title">{homeCopy.title}</h1>
          <p className={styles.description}>{homeCopy.intro}</p>
          <Link className={styles.button} href="/research">
            Explore our research <span aria-hidden="true">→</span>
          </Link>
          <div className={styles.affiliation}>
            Michtom School of Computer Science
            <br />
            Led by Dr. Hongfu Liu
          </div>
        </div>
        <div className={styles.visual}>
          <Image
            src="/images/campus-blossoms.jpg"
            alt="White spring blossoms in front of a modern Brandeis campus building"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 60vw"
            className={styles.photo}
          />
          <div className={styles.glass}>
            <span>Brandeis University</span>
            <p>Michtom School of Computer Science</p>
          </div>
        </div>
      </section>
      <div className={styles.sections}>
        <div className={styles.aboutBand}>
          <section className={styles.about} aria-labelledby="about-b-title">
            <div>
              <p className={styles.eyebrow}>Our lab</p>
              <h2 id="about-b-title">About Our Lab</h2>
              <Link className={styles.peopleLink} href="/people">
                Meet our team <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.bodyCopy}>
              {homeCopy.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
        <div className={styles.researchBand}>
          <section
            className={styles.research}
            aria-labelledby="research-b-title"
          >
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>What we study</p>
                <h2 id="research-b-title">Research Areas</h2>
              </div>
              <Link href="/research">
                View our research <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.researchTopics}>
              <div className={styles.researchFrame}>
                <h3>Data Centric Learning</h3>
              </div>
              <div className={styles.otherAreasFrame}>
                <h3>Other Research Areas</h3>
                <ul className={styles.areas}>
                  {areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
