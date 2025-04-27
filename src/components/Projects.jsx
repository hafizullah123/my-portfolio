const projects = [
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio built with React and Tailwind.",
  },
  {
    title: "E-commerce App",
    desc: "A full-stack e-commerce application built with Laravel and React.",
  },
  {
    title: "Blog Platform",
    desc: "A blogging platform with authentication and admin panel.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
