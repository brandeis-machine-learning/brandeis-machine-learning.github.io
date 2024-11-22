export default function People() {
    return (
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        
        <div className="grid gap-8">
          <div className="border-b pb-6">
            <h2 className="text-2xl font-bold mb-4">Principal Investigator</h2>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Dr. Hongfu Liu</h3>
              <p>Research Professor</p>
              <p className="mt-2">
                Dr. Liu's info here
              </p>
            </div>
          </div>
  
          <div className="border-b pb-6">
            <h2 className="text-2xl font-bold mb-4">Graduate Students</h2>
            <div className="ml-4">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p>PhD Student</p>
                <p>Research: Deep Learning Theory</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p>PhD Student</p>
                <p>Research: Transfer Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }