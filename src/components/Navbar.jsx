export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
