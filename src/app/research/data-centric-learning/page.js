import Image from 'next/image';
import Link from 'next/link';
import styles from '../../interior.module.css';
import { publicationGroups } from '../../../data/publications';
import publications from './publications.module.css';

export default function DataCentricLearning() {
  return (
    <div className={styles.page}>
      <div className={styles.article}>
        <Link className={styles.link} href="/research#data-centric-learning">
          <span aria-hidden="true">←</span>Back to Research
        </Link>
        <article className="space-y-8 mt-8">
          <header className="mb-8">
            <h1 className="text-5xl font-bold text-[#253f4d] mb-6">
              Data Centric Learning
            </h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <div
              className={`${publications.takeaways} bg-white p-8 rounded-sm border border-[#d5e0e4] mb-8`}
            >
              <div>
                <h2 className="text-2xl font-bold text-[#253f4d] mb-4">
                  Key Takeaways
                </h2>
                <ul className="space-y-2 text-[#253f4d]">
                  <li>Data quality directly impacts model performance</li>
                  <li>
                    Well-annotated datasets are crucial for model reliability
                  </li>
                  <li>Addressing data issues improves generalization</li>
                </ul>
              </div>
              <a className={publications.jumpLink} href="#publications-title">
                <span>View papers below</span>
                <Image
                  src="/images/adobe-pdf-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                />
              </a>
            </div>

            <div className="space-y-6 text-[#253f4d]">
              <p>
                Data-centric learning focuses on improving machine learning
                models by prioritizing the quality and diversity of the data
                used for training and evaluation, rather than exclusively
                refining algorithms. This approach recognizes that
                well-annotated, diverse, and representative datasets are crucial
                for building reliable and fair models.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                The Impact of Data Quality
              </h2>
              <p>
                By addressing issues such as label noise, class imbalance, and
                missing data, data-centric learning seeks to enhance model
                performance and generalization capabilities. Our research
                demonstrates that improving data quality can lead to significant
                performance gains, often exceeding those achieved through
                architectural improvements alone.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-4 rounded-sm border border-[#d5e0e4]">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/Weixin Image_20240814091142_high_resolution.jpg"
                      alt="Personalized model"
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-sm border border-[#d5e0e4]">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/Weixin Image_20240814091120_high_resolution.jpg"
                      alt="Standard model"
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Practical Applications
              </h2>
              <p>
                In our recent work, we&apos;ve applied data-centric principles
                to improve computer vision models in healthcare, autonomous
                systems, and personalized recommendations. The results
                consistently show that focusing on data quality leads to more
                robust and reliable models.
              </p>

              <div className="bg-white p-8 rounded-sm border border-[#d5e0e4] my-8">
                <h3 className="text-xl font-bold text-[#253f4d] mb-4">
                  Research Outcomes
                </h3>
                <ul className="space-y-2 text-[#253f4d]">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#365E71] rounded-full"></div>
                    <span>20% improvement in model accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#365E71] rounded-full"></div>
                    <span>Reduced bias in predictions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#365E71] rounded-full"></div>
                    <span>Better generalization to new domains</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Future Directions
              </h2>
              <p>
                Our ongoing research focuses on developing automated tools for
                data quality assessment and correction, making data-centric
                approaches more accessible to practitioners. We&apos;re also
                exploring ways to integrate active learning techniques with data
                quality improvements.
              </p>
            </div>
          </section>
          <section
            className={publications.section}
            aria-labelledby="publications-title"
          >
            <h2 id="publications-title">Selected Publications</h2>
            <p>Explore our research through the following selected papers.</p>
            {publicationGroups.map((group, index) => (
              <section
                className={publications.group}
                key={group.title}
                aria-labelledby={`publication-group-${index}`}
              >
                <div className={publications.groupHeading}>
                  <h3 id={`publication-group-${index}`}>{group.title}</h3>
                </div>
                <ul className={publications.list}>
                  {group.papers.map((paper) => (
                    <li className={publications.paper} key={paper.pdf}>
                      <div>
                        <h4>{paper.title}</h4>
                        <p>{paper.description}</p>
                      </div>
                      <a
                        className={publications.pdf}
                        href={paper.pdf}
                        download
                        aria-label={`Download PDF: ${paper.title}`}
                      >
                        <span>PDF</span>
                        <Image
                          src="/images/adobe-pdf-icon.png"
                          alt=""
                          width={24}
                          height={24}
                          unoptimized
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </section>
        </article>
      </div>
    </div>
  );
}
