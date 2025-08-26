import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MenuList } from "../js/MenuList";

export default function Footer() {
  return (
    <footer className="bg-white mt-[0.5px] text-gray-700 py-10 px-6 dark:bg-slate-900 dark:text-gray-300 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          {/* <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2"></h2> */}
          <Logo/>
          <p>Empowering connections, growing together.</p>
          <p className="text-sm text-blue-500 mt-2">“Connecting people, building futures.”</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pages</h3>
          <ul className="space-y-1">
            {MenuList.map((element,idx)=>{
              let {name,path}=element;
              return(

                <li key={idx}><Link to={path}className="hover:text-blue-600 dark:hover:text-blue-400 transition">{name}</Link></li>
              )
            })}
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: info@yourcompany.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-10 border-t border-gray-200 dark:border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
