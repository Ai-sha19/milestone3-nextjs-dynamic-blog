export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <form className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-md mb-3"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-md mb-3"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-md mb-3"
            required
          ></textarea>
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all">
            Send
          </button>
        </form>
      </div>
    );
  }
  