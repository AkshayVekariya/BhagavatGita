import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { RiFileChartFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Dropdown(props) {
    const [loading, setLoading] = useState(true)
    const [chapter, setChapter] = useState([])
    const [error, setError] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    async function DropDownApiChapterFetch() {

        try {
            const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18`,
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
            // console.log(ChapterData);
        } catch (error) {
            setError("error.message" + error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        DropDownApiChapterFetch()
    }, [])

    if (loading) return <h2> chater are fetching</h2>
    if (!chapter.length) return <h2> chater are not found</h2>
    if (error) return <h2>api not work</h2>


    function gotoChapter(selectedChapter) {
        navigate(`/chapter/${selectedChapter}`);
        setIsOpen(false)
    }

    const toggleDropwon = () => {
        setIsOpen(!isOpen)
    };


    return (
        <div>

            <div name="chapter" id="chapter" className='flex  relative'>
                <div onClick={() => { toggleDropwon() }} className='grid grid-cols-2 items-center gap-3 mr-[-50px]'>
                    <span >{props.language=== "English"? "chapter":"अध्याय"} </span>
                    <div >
                        <FaChevronUp className={`transition ease-in-out  duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                    </div>
                </div>
                {isOpen && (
                    <div className=' grid grid-cols-2 gap-y-1.5 gap-x-1 absolute bg-white text-black w-[300px] border-[1px] border-gray-600 p-2.5 rounded-2xl top-13 z-10 '>
                        {
                            chapter.map((value) => {
                                return <div className='flex gap-3  items-center text-[18px] hover:bg-gray-100 p-1' key={value.chapter_number} onClick={() => { gotoChapter(value.chapter_number) }}> <RiFileChartFill className='text-orange-400' />  { props.language === "English" ? "Chapter" : "अध्याय"} {value.chapter_number
                                }</div>
                            })
                        }
                    </div>
                )}
            </div>
        </div >
    )
}

export default Dropdown