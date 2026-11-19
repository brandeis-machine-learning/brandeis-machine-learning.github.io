import styles from '../interior.module.css';
import layout from './page.module.css';
const studentGroups = [
  {
    title: 'PhD',
    people: [
      { name: 'Ziao Yang', period: '2023–present' },
    ],
  },
  { title: 'Master', people: [{ name: 'Haomin Sun', period: '2026–present' }] },
  {
    title: 'Undergraduate',
    people: [
      'Chenxi Zou',
      'John Zhang',
      'Adrian Nyakairu',
      'Noah Koike Smith',
    ].map((name) => ({ name, period: '2026–present' })),
  },
];
const alumniGroups = [
  {
    title: 'PhD',
    people: [
      { name: 'Wenxiao Xiao', period: '2020–2025' },
      { name: 'Han Yue', period: '2019–2024' },
      {
        name: 'Peizhao Li',
        period: '2019–2023',
        website: 'https://peizhaoli05.github.io/',
      },
    ],
  },
  {
    title: 'Master',
    people: [
      { name: 'Dennis Zhang', period: '2019–2020' },
      { name: 'Kun Li', period: '2018–2020' },
      { name: 'Runjie Lu', period: '2019–2020' },
      { name: 'Sibo Zhu', period: '2018–2019' },
    ],
  },
  {
    title: 'Undergraduate',
    people: [
      { name: 'Joshua Liu', period: '2025–2026' },
      { name: 'Zihao Wang', period: '2019–2021' },
      { name: 'Hangyu Du', period: '2020–2021' },
      { name: 'Hanyu Song', period: '2019–2021' },
      { name: 'Feng Chen', period: '2020–2021' },
    ],
  },
  {
    title: 'High School',
    people: [
      { name: 'Daniel Wang', period: '2026–2026' },
      { name: 'Pamela Hao', period: '2025–2026' },
      { name: 'Hannah You', period: '2024–2025' },
      { name: 'Ethan Xia', period: '2020–2021' },
    ],
  },
];
function MemberList({ people }) {
  return (
    <ul className={layout.roster}>
      {people.map((person) => (
        <li key={person.name}>
          <div className={layout.personLine}>
            <span>
              {person.website ? (
                <a className={layout.personLink} href={person.website}>
                  {person.name}
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                person.name
              )}
            </span>
            <span className={layout.period}>{person.period}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default function People() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Liu Lab · Brandeis University</p>
          <h1>Our Team</h1>
        </div>
      </header>
      <div className={layout.content}>
        <section
          id="principal-investigator"
          className={layout.pi}
          aria-labelledby="pi-title"
        >
          <h2 id="pi-title">Dr. Hongfu Liu</h2>
          <p className={layout.position}>
            Assistant Professor, Michtom School of Computer Science
            <br />
            Brandeis University
          </p>
          <p className={layout.bio}>
            Dr. Liu received his Ph.D. from the Department of Electrical &amp;
            Computer Engineering at Northeastern University, supervised by Prof.
            Yun Fu. He completed his master&apos;s and bachelor&apos;s degrees
            in management at Beihang University with Prof. Junjie Wu. His
            research interests include cluster analysis, outlier detection,
            transfer learning, and feature selection.
          </p>
        </section>
      </div>
      <div className={`${layout.content} ${layout.memberContent}`}>
        <section
          id="current-students"
          className={layout.group}
          aria-labelledby="students-title"
        >
          <h2 id="students-title">Current Students</h2>
          <div className={layout.studentGroups}>
            {studentGroups.map((group) => (
              <section className={layout.rosterGroup} key={group.title}>
                <h3>{group.title}</h3>
                <MemberList people={group.people} />
              </section>
            ))}
          </div>
          <div className={layout.incoming}>
            <span className={layout.badge}>Incoming</span>
            <strong>Xuesong Jia</strong>
          </div>
        </section>
        <section
          id="alumni"
          className={layout.group}
          aria-labelledby="alumni-title"
        >
          <h2 id="alumni-title">Alumni</h2>
          <div className={layout.alumniGroups}>
            {alumniGroups.map((group) => (
              <section className={layout.rosterGroup} key={group.title}>
                <h3>{group.title}</h3>
                <MemberList people={group.people} />
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
