import React, { useContext } from "react";
import { languageContext } from "../../../App";
import { useNavigate } from "react-router-dom";

function HeroSection() {
const {language} = useContext(languageContext)
console.log("languageContext in HeroSection:", language);
const navigate = useNavigate()

const gotochapter = ()=>{
  navigate(`/chapter/1`)
}

  return (
    <div className="relative">
      <div className="flex relative justify-center w[100%]n">
        <div className="relative flex z-1 ">
          <div className="w-[1300px]">
            <img
              src="./banner1.webp"
              className="w-[100%] rounded-2xl "
              alt=""
            />
          </div>
          <div className="absolute top-40 left-100 text-center grid items-center text-white font-extrabold text-[3.5rem] w-[50%]">
            <p>
              {language === "English"?"Experience the Gita":"भगवत गीता का अनुभव करें"}
              <span className="text-amber-500"> {language==="English"?"Anywhere, Anytime":"कहीं भी कभी भी"}</span>
            </p>
            <button className="text-[16px] bg-white text-black font-inter cursor-pointer font-normal w-[120px] border-gray-600 block m-auto p-[10px]  rounded-[10px]" onClick={()=>{gotochapter()}} >{language==="English"?"Read More":"अभी पढ़ें"}</button>
          </div>
        </div>
        <div className="absolute  m-auto block top-50">
          <img
            src="./main-background.webp"
            className="w-[1600px]"
            alt="mainbg"
          />
        </div>
      </div>
      <div className=" top-[20px] relative w-[100%] mt-[70px]">
        <div className="w-[80%] block m-auto p-12 shadow-md shadow-gray-500 rounded-2xl mb-10 bg-white">
          <div className="flex items-center ">
            <h3 className="text-orange-500">{language=== "English"?"Verse of the day - BG 1.31":"आज का श्लोक - ।।2.9।।"}</h3>
            <hr className=" w-[80%] ml-5 text-gray-500" />
          </div>
          <div>
            <p className="text-gray-400">
           {language==="English"?"And I see ill omens, O Kesava. I do not see any good in slaying my kinsmen in battle.":"।।2.9।। संजय बोले - हे शत्रुतापन धृतराष्ट्र! ऐसा कहकर निद्राको जीतनेवाले अर्जुन अन्तर्यामी भगवान् गोविन्दसे 'मैं युद्ध नहीं करूँगा' ऐसा साफ-साफ कहकर चुप हो गये।"}
            </p>
            <button className="font-bold font-serif cursor-pointer hover:text-gray-500">{language==="English"?"See more":"और देखें"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
