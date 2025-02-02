import Link from "next/link";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-2 text-center font-[open-sans]">
        <div className="flex justify-center space-x-4">
          <Link href="https://www.facebook.com/areeba.sheikh.92?mibextid=ZbWKwL" 
          target="_blank" className="text-blue-500 hover:text-blue-700">
            <FaFacebook className="text-xl" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" className="text-pink-500
           hover:text-pink-700">
            <FaInstagram className="text-xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/areeba-sheikh-618283213" target="_blank"
           className="text-blue-700 hover:text-blue-900">
            <FaLinkedin className="text-xl" />
          </Link>
        </div>
        <p className="text-sm mt-3">&copy; 2024 Areeba Sheikh. All rights reserved.</p>
      </footer>
    );
  };
  export default Footer;