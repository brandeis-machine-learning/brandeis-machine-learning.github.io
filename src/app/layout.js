import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Hongfu Liu's Research Lab",
  description: 'Machine Learning and AI Research Lab',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col overflow-x-hidden">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </div>
          <main className="flex-1 pt-16 p-4 text-black">
            {children}
          </main>
          <div>
            <Footer />
          </div>
      </body>
    </html>
  );
}
