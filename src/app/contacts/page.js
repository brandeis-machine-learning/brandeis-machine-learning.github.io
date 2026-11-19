import styles from '../interior.module.css';
import layout from './page.module.css';
export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Liu Lab · Brandeis University</p>
          <h1>Contact Us</h1>
        </div>
      </header>
      <div className={layout.content}>
        <div className={layout.contactGrid}>
          <section className={layout.emailBlock} aria-labelledby="email-title">
            <h2 id="email-title">Email</h2>
            <a className={layout.email} href="mailto:hongfuliu@brandeis.edu">
              hongfuliu@brandeis.edu
            </a>
            <div className={layout.appointments}>
              <h3>Appointments</h3>
              <p>
                For online meetings, please schedule an appointment via{' '}
                <a href="mailto:hongfuliu@brandeis.edu">email</a>.
              </p>
            </div>
          </section>
          <section className={layout.location} aria-labelledby="location-title">
            <h2 id="location-title">Location</h2>
            <address>
              Michtom School of Computer Science
              <br />
              Volen Center for Complex Systems, Room 136
              <br />
              Brandeis University
              <br />
              415 South Street
              <br />
              Waltham, MA 02453
            </address>
          </section>
        </div>
        <section className={layout.join} aria-labelledby="join-title">
          <h2 id="join-title">Join Our Lab</h2>
          <p>
            We welcome Ph.D. students, PostDocs, Visiting Scholars, and Research
            Associates to work on:
          </p>
          <ul>
            {[
              'Machine Learning',
              'Data Mining',
              'Computer Vision',
              'Business Intelligence',
              'Social Media Analytics',
            ].map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
