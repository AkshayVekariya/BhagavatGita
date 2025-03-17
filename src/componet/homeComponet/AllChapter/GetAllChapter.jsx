import React, { useContext, useEffect, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { languageContext } from "../../../App";

function GetAllChapter() {
  const { language } = useContext(languageContext)
  const [loading, setLoading] = useState(true)
  const [chapter, setChapter] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate()

  async function getChapterApi() {
    try {
      const response = await fetch(
        'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18',
        {
          method: "GET",
          headers: {
            'x-rapidapi-key': '9af55b4d8fmsh760cc0217ea8f34p1f6b99jsn4ef52d27cacb',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
          }

        }
      );
      const GetAllChapter = await response.json();
      setChapter(GetAllChapter);
      // console.log(GetAllChapter);

    } catch (Error) {
      setError("Error fetch data", Error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getChapterApi();
  }, []);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>
  if (!chapter || !Array.isArray(chapter)) return <h1> chapters not found</h1>;

  function gotoChapter(chapterNumber) {
    navigate(`/chapter/${chapterNumber}`)
  }

  return (
    <div className=" p-2.5 ">
      <div className="my-10">
        <h2 className="text-4xl w-[100%] font-bold ">   {language === "English" ? "Chapter" : "अध्याय"} </h2>
      </div>
      <div className=" grid w-[100%] gap-5 grid-cols-2">
        {chapter.map((value, index) => {
          return (
            <div key={index} className="bg-white cursor-pointer hover:bg-[#fddf89] hover:border-2 border-orange-500  rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[1.5rem]" onClick={() => { gotoChapter(value.id) }}>
              <h1 className="text-orange-500 text-1xl font-extrabold">{language === "English" ? "Chapter" : "अध्याय"}:- {value.id}</h1>
              <p className="text-[1.2rem] my-2.5 font-bold">{language=== "English"? `${value.name_translated}`:`${value.name}`}</p>
              <p className="text-gray-500 line-clamp-4 my-1.5"> {language==="English"?`${value.chapter_summary}`:`${value.chapter_summary_hindi}`}</p>
              <p className="flex justify-start items-center gap-2 my-4 "><TfiMenuAlt />{value.verses_count} {language==="English"?"Verses":"वर्सेज"} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetAllChapter;
