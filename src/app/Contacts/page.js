export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-5xl font-bold text-[#026670] mb-16">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Location</h2>
            <div className="space-y-2 text-lg text-[#026670]">
              <p>Michtom School of Computer Science</p>
              <p>Brandeis University</p>
              <p>415 South Street</p>
              <p>Waltham, MA 02453</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Email</h2>
            <p className="text-lg text-[#026670]">hongfuliu@brandeis.edu</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Join Our Lab</h2>
            <p className="text-lg text-[#026670] mb-6">
              We welcome Ph.D. students, PostDocs, Visiting Scholars, and Research Associates to work on:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Machine Learning",
                "Data Mining",
                "Computer Vision",
                "Business Intelligence",
                "Social Media Analytics"
              ].map((area, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-[#026670] bg-[#F5F5F5] p-3 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#026670] rounded-full"></div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
            <h2 className="text-3xl font-bold text-[#026670] mb-6">Appointments</h2>
            <p className="text-lg text-[#026670]">
              For online meetings, please schedule an appointment via email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}