import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#026670] text-white h-16 z-50 flex items-center px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Liu Lab</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-white hover:text-[#9FEDD7]">Home</Link></li>
            <li><Link href="/research" className="text-white hover:text-[#9FEDD7]">Research</Link></li>
            <li><Link href="/people" className="text-white hover:text-[#9FEDD7]">People</Link></li>
            <li><Link href="/contacts" className="text-white hover:text-[#9FEDD7]">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
