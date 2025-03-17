import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AllVerses from '../Allverses/AllVerses'
import { languageContext } from '../../App'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function Chapter() {
  const { language } = useContext(languageContext)
  const { number } = useParams()
  const [loading, setLoading] = useState(true)
  const [chapter, setChapter] = useState(null)
  const [error, setError] = useState()
  const navigate = useNavigate(number)

  const [currentIndex, setCurrentIndex] = useState(Number(number))

  const nextChapter = () => {
    if (currentIndex < 18) {
      const nextindex = currentIndex + 1
      setCurrentIndex(nextindex)
      navigate(`/chapter/${nextindex}`)
    }
  }

  const prevChapter = () => {
    if (currentIndex > 1) {
      const previndex = currentIndex - 1
      setCurrentIndex(previndex)
      navigate(`/chapter/${previndex}`)
    }
  }
  // console.log(language === "English", "chapter");
  async function getParticularchapter() {
    try {
      const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '9af55b4d8fmsh760cc0217ea8f34p1f6b99jsn4ef52d27cacb',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
          }
        }
      );
      const ChapterData = await response.json()
      setChapter(ChapterData)
      // console.log("chapterData", number)
    } catch (Error) {
      setError(`API not work${Error.message}`);
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    getParticularchapter()
  }, [number, language])

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;
  if (!chapter) return <h1>Particular chapter Data not found</h1>;

  return (
    <div className='w-[100%] flex justify-center items-baseline h-full '>
      <div>
        <GrFormPrevious onClick={() => (prevChapter())} size={50} className='fixed cursor-pointer'/>
      </div>
      <div className=" w-[71%] block mx-auto p-6 ">
        <div className=''>
          <div className='mt-[100px] mb-5'>
            <h3 className='text-orange-500 uppercase text-center text-2xl'>{language === "English" ? "Chapter" : "अध्याय"} {chapter.chapter_number}</h3>
            <h2 className='font-extrabold text-4xl text-center  my-10'>{language === "English" ? `${chapter.name_translated}` : `${chapter.name}`}</h2>
            <p className='text-[18px]'>{language === "English" ? `${chapter.chapter_summary}` : `${chapter.chapter_summary_hindi}`}</p>
          </div>
          <AllVerses />
        </div>
      </div>
      <div >
        <MdNavigateNext onClick={() => (nextChapter())} size={50} className='fixed cursor-pointer'/>
      </div>
    </div>
  )
}

export default Chapter



