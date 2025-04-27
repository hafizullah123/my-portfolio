export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center"
      id="home"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm Hafizullah
      </h1>
      <p className="text-2xl md:text-3xl mb-6">
        Full-Stack Developer | Designer | Creator
      </p>
      <a
        href="#projects"
        className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
}
