export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold text-center">Welcome to Liu Lab</h1>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Our Lab</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4">
                info here
              </p>
              <p>
                info here
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">paper 1</li>
            <li className="mb-2">paper 2</li>
            <li className="mb-2">paper 3</li>
          </ul>
        </section>
      </div>
    </main>
  );
}