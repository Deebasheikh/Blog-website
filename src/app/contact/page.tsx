import Link from "next/link";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>

const Contact = () => {
    return (
      <div className="py-[14px]  sm:py-[11px] px-4 bg-gray-900 font-[open-sans]
       text-white text-center">
        <div className="max-w-md mx-auto bg-gray-800 p-[17px] sm:py-4 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-2">Contact Me</h1>
          <p className="text-base mb-4">Feel free to reach out by filling the form below.</p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                rows={3}
                placeholder="Your Message"
                required
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700
                 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2
             rounded-lg text-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
          <div className="mt-4">
            <p>Or email me directly at:</p>
            <Link href="mailto:areebasheikh27.as@gmail.com" className="text-blue-500
             font-bold hover:text-blue-700">
              areebasheikh27.as@gmail.com
            </Link>
          </div>
        </div>
      </div>
    );
  };
  export default Contact;