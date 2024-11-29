export default function People() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-5xl font-bold text-[#026670] mb-16">Our Team</h1>
        
        <div className="space-y-16">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Principal Investigator</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#026670]">Dr. Hongfu Liu</h3>
              <div className="text-lg text-[#026670] space-y-2">
                <p>Assistant Professor, Michtom School of Computer Science</p>
                <p>Brandeis University</p>
              </div>
              <p className="text-lg text-[#026670] leading-relaxed">
                Dr. Liu received his Ph.D. from the Department of Electrical & Computer Engineering at Northeastern University, 
                supervised by Prof. Yun Fu. He completed his master&apos;s and bachelor&apos;s degrees in management at Beihang University 
                with Prof. Junjie Wu. His research interests include cluster analysis, outlier detection, transfer learning, 
                and feature selection.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Current PhD Students</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Wenxiao Xiao", period: "2020-present" },
                { name: "Han Yue", period: "2019-present" },
                { 
                  name: "Peizhao Li", 
                  period: "2019-present",
                  website: "https://peizhaoli05.github.io/"
                }
              ].map((student, index) => (
                <div key={index} className="bg-[#F5F5F5] p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#026670] mb-2">{student.name}</h3>
                  <p className="text-[#026670]">PhD Student ({student.period})</p>
                  {student.website && (
                    <a href={student.website} className="text-[#026670] hover:text-[#026670]/80 underline mt-2 block">
                      Personal Website
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Alumni</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Hangyu Du (2020-2021) - Brown University, Master",
                "Feng Chen (2020-2021) - Harvard Medical School, Master",
                "Hanyu Song (2020-2021) - Salesforce",
                "Elizabeth Fong (2020)",
                "Kun Li (2018-2020)",
                "Zihao Wang (2019-2020)",
                "Sibo Zhu (2018-2019) - University of Toronto, PhD",
                "Runjie Lu (2018-2019) - Wayfair"
              ].map((alumni, index) => (
                <p key={index} className="text-[#026670] p-4 bg-[#F5F5F5] rounded-lg">{alumni}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}