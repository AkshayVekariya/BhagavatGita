import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { languageContext } from "../../App";

function Navigation(props) {

  const { language, setLanguage } = useContext(languageContext)

  useEffect(() => {
    localStorage.setItem("lan", language)
  }, [language])

  function changeLanguage(e) {
    setLanguage(e.target.value)
  }

  return (
    <nav className="sticky top-0 bg-white w-full z-50 ">
      <div className="flex   items-center justify-between py-8 px-3 my-5 border-b-2 border-gray-600 capitalize">
        <div>
          <h2 className="text-3xl cursor-pointer font-medium"><Link to="/">{language === "English" ? "Bhagavad Gita" : "भागवद गीता"}</Link></h2>
        </div>
        <div className="flex  gap-[40px]">
          <ul className="flex items-center gap-[40px] text-[20px]">
            <li className="hover:text-gray-500 cursor-pointer ">
              <Dropdown language={language} />
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link to="/quotes">{language === "English" ? "Quotes" : "उद्धरण"}</Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer "> <Link to="/Aboutus"> {language === "English" ? "about gita" : "भगवत गीता के बारे में"}</Link> </li>
            <li className="hover:text-gray-500 cursor-pointer "> <Link to="/Donet"> {language === "English" ? "donate" : "दान करें"} </Link></li>
          </ul>
          <div className="flex gap-10 items-center">
            <div className="relative flex items-base ">
              <input
                type="text"
                className=" w-[200px]  border-1 border-gray-300 rounded-[10px] py-2 pl-10 text-base  outline-0"
                placeholder={language === "English" ? "Search" : "खोज"}
              />
              <FaSearch className="p-[5px]  text-3xl mt-1 absolute  text-gray-400 cursor-pointer" />
            </div>
            <select name="language" value={language} onChange={changeLanguage} className="outline-none  cursor-pointer">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
