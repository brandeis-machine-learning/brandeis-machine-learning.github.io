export default function Contact() {
    return (
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid gap-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p>Department of Computer Science</p>
            <p>[University Name]</p>
            <p>[Street Address]</p>
            <p>[City, State ZIP]</p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Email</h2>
            <p>email</p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Prospective Students</h2>
            <p>
              If you're interested in joining our lab, please send an email with your CV 
              and research interests. We're always looking for motivated students interested 
              in machine learning and AI.
            </p>
          </div>
        </div>
      </div>
    );
  }