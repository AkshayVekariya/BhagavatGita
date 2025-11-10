import React, { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { languageContext } from "../../App";
function Footer() {
  const { language } = useContext(languageContext)
  return (
    <div className="mt-30 w-[100%]  justify-center  mb-3.5">
      <div className="grid  items-center border-y-1 border-gray-400 col-span-2 justify-center pt-15">
        <div>
          <ul className="list-none pb-10  gap-8 flex ">
            <li className="hover:text-gray-600 cursor-pointer"><Link to="/Aboutus"> {language === "English" ? "about gita" : "भगवत गीता के बारे में"}</Link></li>
            <li className="hover:text-gray-600 cursor-pointer"><Link to="/Acknowledgements"> {language === "English" ? "Acknowledgements" : "स्वीकृतियाँ"}</Link></li>
            <li className="hover:text-gray-600 cursor-pointer"><Link to="/Privacy">{language === "English" ? "Privacy" : "प्राइवेसी"}</Link></li>
            <li className="hover:text-gray-600 cursor-pointer"><Link to="/Term"> {language === "English" ? "Terms" : "शर्तें"}</Link></li>
            <li className="hover:text-gray-600 cursor-pointer"> <Link to="/Donet"> {language === "English" ? "donate" : "दान करें"} </Link></li>
            <li className="hover:text-gray-600 cursor-pointer"><Link to="/Contact">{language === "English" ? "Contact us" : "संपर्क करें"}</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-6 justify-center mb-4">
            <li>
              <FaFacebook size={25} className="text-gray-400 hover:text-gray-600 cursor-pointer " />
            </li>
            <li>
              <FaXTwitter size={25} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </li>
            <li>
              <IoLogoGithub size={25} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-gray-400">
          &copy;2025 {language === "English" ? " Copyright:" : "कॉपीराइट"} <a href="https://vedvyas.org/" target="_blank" className="text-orange-500"> Ved Vyas Foundation</a>.{language === "English" ? "Allrights reserved." : " सर्वाधिकार सुरक्षित."}
        </p>
      </div>
    </div>
  );
}

export default Footer;