import React, { useContext, useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { languageContext } from '../../App';


function AllVerses() {
    const { language } = useContext(languageContext)
    const { number } = useParams()
    const [loading, setLoading] = useState(true);
    const [verses, setVerses] = useState([]);
    const [error, setError] = useState();
    const navigate = useNavigate(number)

    function goToNavigate(verseNumber) {
        navigate(`./Verse/${verseNumber}`)
    }

 

    async function getChpaterVerses() {
        if (!number) return;
        try {
            const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/verses/`,
                {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '9af55b4d8fmsh760cc0217ea8f34p1f6b99jsn4ef52d27cacb',
                        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
                    }
                }
            );
            const versesData = await response.json();
            setVerses(versesData || []);
            console.log("verse data", versesData)
        } catch (error) {
            setError(`API are not working ${error}`)
        } finally {
            setLoading(false)
        }
    }


    function getTranslatedVerse(value) {
        const translationFound = value.translations.find((translationObject) => {
            if (language === "English") {
                return translationObject.language === "english";
            }
            return translationObject.language === "hindi";
        })
        if (translationFound) {
            return translationFound.description;
        }
    }

    useEffect(() => {
        getChpaterVerses();
    }, [number]);
    if (!number) return <h3>chapter not found </h3>
    if (loading) return <h2>verses are loading....</h2>;
    if (error) return <h2>{error}</h2>;
    if (!verses || verses.length === 0) return <h2>verses data not found</h2>


    return (
        <div>
            <div className='w-[100%] flex grid-cols-2 justify-between border-y-1 p-6 border-gray-400 my-12'>
                <h2 className='font-bold text-[20px]'>{verses.length} {language === "English" ? "Verses" : "वर्सेज"}</h2>
                <div className='flex border-2 items-center  text-[20px] border-gray-200'>
                    <input type="text" className='px-2 py-1.5' placeholder='Go to Verse' />
                    <div className=' hover:bg-gray-300 flex items-center gap-2.5 pr-2'>
                        <FaArrowDownShortWide className='border-l-2  text-[40px] cursor-pointer py-1.5 border-gray-200' />
                        sort By
                        <FaChevronDown />
                    </div>
                </div>
            </div>
            <div className=' grid  grid-cols-[auto_1fr_auto] '>


                <div>
                    {
                        verses.map((value) => {
                            return <div className='grid grid-cols-[100px_1fr] p-5 gap-10 rounded-2xl my-3  cursor-pointer hover:bg-orange-100' key={value.id || []} onClick={() => { goToNavigate(value.verse_number) }} >
                                <h2 className='uppercase text-[20px] text-orange-500'>{language === "English" ? "verse" : "वर्सेज"} {value.verse_number}</h2>
                                <p className='text-[16px]'>{getTranslatedVerse(value)}</p>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default AllVerses;




