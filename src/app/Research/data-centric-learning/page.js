import Image from 'next/image';

export default function DataCentricLearning() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <article className="space-y-8">
          <header className="mb-12">
            <div className="text-sm text-[#026670] mb-4">March 2024</div>
            <h1 className="text-5xl font-bold text-[#026670] mb-6">Data-centric Learning in Computer Vision</h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-[#026670] mb-4">Key Takeaways</h2>
              <ul className="space-y-2 text-[#026670]">
                <li>Data quality directly impacts model performance</li>
                <li>Well-annotated datasets are crucial for model reliability</li>
                <li>Addressing data issues improves generalization</li>
              </ul>
            </div>

            <div className="space-y-6 text-[#026670]">
              <p>
                Data-centric learning focuses on improving machine learning models by prioritizing the quality and diversity of the data used for training and evaluation, rather than exclusively refining algorithms. This approach recognizes that well-annotated, diverse, and representative datasets are crucial for building reliable and fair models.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">The Impact of Data Quality</h2>
              <p>
                By addressing issues such as label noise, class imbalance, and missing data, data-centric learning seeks to enhance model performance and generalization capabilities. Our research demonstrates that improving data quality can lead to significant performance gains, often exceeding those achieved through architectural improvements alone.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="relative w-full aspect-square">
                    <Image 
                      src="../Weixin Image_20240814091142_high_resolution.jpg"
                      alt="Personalized model"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="relative w-full aspect-square">
                    <Image 
                      src="../Weixin Image_20240814091120_high_resolution.jpg"
                      alt="Standard model"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
              <p>
                In our recent work, we&apos;ve applied data-centric principles to improve computer vision models in healthcare, autonomous systems, and personalized recommendations. The results consistently show that focusing on data quality leads to more robust and reliable models.
              </p>

              <div className="bg-white p-8 rounded-xl shadow-lg my-8">
                <h3 className="text-xl font-bold text-[#026670] mb-4">Research Outcomes</h3>
                <ul className="space-y-2 text-[#026670]">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#026670] rounded-full"></div>
                    <span>20% improvement in model accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#026670] rounded-full"></div>
                    <span>Reduced bias in predictions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#026670] rounded-full"></div>
                    <span>Better generalization to new domains</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Future Directions</h2>
              <p>
                Our ongoing research focuses on developing automated tools for data quality assessment and correction, making data-centric approaches more accessible to practitioners. We&apos;re also exploring ways to integrate active learning techniques with data quality improvements.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}