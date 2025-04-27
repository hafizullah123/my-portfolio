export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          ></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
