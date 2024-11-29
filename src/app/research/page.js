import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Research() {
  const articles = [
    {
      title: "Data-centric Learning in Computer Vision",
      description: "Exploring how data-centric approaches improve model performance and reduce bias in computer vision tasks.",
      image: "./data-centric.png",
      date: "November 2024",
      slug: "data-centric-learning"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-5xl font-bold text-[#026670] mb-16">Research</h1>
        
        <div className="space-y-12">
          {articles.map((article, index) => (
            <Link 
              href={`/research/${article.slug}`} 
              key={index}
              className="block group"
            >
              <article className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-sm text-[#026670] font-medium">{article.date}</div>
                  <h2 className="text-2xl font-bold text-[#026670] group-hover:opacity-80 transition-opacity duration-300">
                    {article.title}
                  </h2>
                  <p className="text-[#026670] leading-relaxed">
                    {article.description}
                  </p>
                  <div className="inline-flex items-center text-[#026670] font-medium group-hover:opacity-80 transition-opacity duration-300">
                    Read more 
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
                <div className="order-first md:order-last relative h-64">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}