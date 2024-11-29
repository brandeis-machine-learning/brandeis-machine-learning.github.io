export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDEAE5]">
      <div className="container mx-auto px-4">
        <section className="h-screen flex items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-6xl font-bold text-[#026670]">Welcome to Liu Lab</h1>
            <p className="text-xl text-[#026670] leading-relaxed">
              Advancing machine learning and AI research at Brandeis University through innovative algorithms, methodologies, and applications.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-[#026670] mb-12">About Our Lab</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#026670] leading-relaxed">
                The Liu Lab at Brandeis University&apos;s Michtom School of Computer Science focuses on cutting-edge research in machine learning and artificial intelligence. Led by Dr. Hongfu Liu, our team develops novel algorithms and frameworks in cluster analysis, outlier detection, transfer learning, and feature selection.
              </p>
              <p className="text-lg text-[#026670] leading-relaxed">
                Our research spans various domains including consensus clustering, constrained clustering, balanced clustering, multi-view clustering, interpretable clustering, and fair clustering. We also work on heterogeneous domain adaptation, unsupervised feature selection, and business intelligence applications.
              </p>
            </div>
            <div className="bg-[#E3E0DC] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#026670] mb-6">Research Areas</h3>
              <ul className="grid grid-cols-2 gap-4 text-[#026670]">
                {[
                  "Cluster Analysis",
                  "Outlier Detection",
                  "Transfer Learning",
                  "Feature Selection",
                  "Machine Learning",
                  "Computer Vision",
                  "Social Media Analytics"
                ].map((area, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#026670] rounded-full"></div>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-[#026670] mb-12">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                date: "2024/1",
                content: "One ICLR oral accepted. Congrats to Peizhao!"
              },
              {
                date: "2023/11",
                content: "Congrats to Peizhao&apos;s NIJ Fellowship!"
              },
              {
                date: "2023/11",
                content: "Congrats to Peizhao&apos;s graduation!"
              },
              {
                date: "2023/9",
                content: "Welcome my new student Ziao Yang."
              }
            ].map((news, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F2] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-sm font-medium text-[#026670] mb-2 block">{news.date}</span>
                <p className="text-[#026670] font-medium">{news.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}