import React, { useContext } from "react";
import { languageContext } from "../../../App"


function StaInspiredDaily() {
const {language} = useContext(languageContext)
  return (
    <div className="my-15 flex items-center   ">
      <div className="relative w-[100%]">
        <img
          src="./ShlokaoftheDay.webp"
          className="bg-[#FFE9D5] absolute w-[100%] h-[250px] rounded-[10px]"
          alt=""
        />
        <div className="pt-15">
          <div className="relative flex  flex-col items-center gap-2 text-center ">
            <h2 className="mb-4 text-4xl font-bold w-[60%]">
              {language === "English"?"Have the Shloka of the Day delivered to your inbox each morning":"दिन का श्लोक हर सुबह अपने इनबॉक्स में भेजें"}
            </h2>
            <div className="flex items-center gap-x-[50px]">
              <input type="text" placeholder={language === "English"?"Enter Your Name":"अपना नाम दर्ज करें"} className="bg-white p-3 w-[250px] rounded-[10px]  outline-orange-300" />
              <input type="email" placeholder={language=== "English"?"Enter Your Email":"अपना ईमेल दर्ज करें"}  className="bg-white p-3 w-[250px] rounded-[10px]  outline-orange-300" />
              <button className="bg-orange-500 px-[40px] py-[12px] rounded-[10px] text-white font-bold hover:bg-[#F89330]">{language==="English"?"Subscribe":"सदस्यता लें"} </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaInspiredDaily;
