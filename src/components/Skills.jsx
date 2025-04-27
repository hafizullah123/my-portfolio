const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "PHP",
  "Laravel",
  "MySQL",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white px-6 py-4 rounded-lg shadow-md text-xl font-semibold hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
