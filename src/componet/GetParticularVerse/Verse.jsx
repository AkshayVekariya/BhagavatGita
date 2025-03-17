import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Divede from '../verseDiveder/Divede';
import { languageContext } from "../../App"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function Verse() {
    const { language } = useContext(languageContext)
    const { number, verseNumber } = useParams()
    const navigate = useNavigate(verseNumber,number)
    const [loading, setLoading] = useState(true);
    const [verse, setVerse] = useState([]);
    const [error, setError] = useState();
    const [currentIndex, setCurrentIndex] = useState(Number(verseNumber))
    const currentChapter = Number(number)


    const nextIndex = () => {

        const nextVerse = currentIndex + 1
        setCurrentIndex(nextVerse)
        navigate(`/chapter/${currentChapter}/Verse/${nextVerse}`)
        console.log(currentChapter,"currentchaper")
        console.log(nextVerse,"verse")
    }

    const prevIndex = () => {
        const prevVerse = currentIndex - 1
        setCurrentIndex(prevVerse)
        navigate(`/chapter/${currentChapter}/Verse/${prevVerse}`)
        console.log(currentChapter,"currentchaper")
        console.log(prevVerse,"verse")
    }

    async function getVerse() {
        try {

            const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/${verseNumber}/`,
                {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '9af55b4d8fmsh760cc0217ea8f34p1f6b99jsn4ef52d27cacb',
                        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
                    }
                });
            const particularVerse = await response.json();
            setVerse(particularVerse);
            console.log("particularVerseDetails", particularVerse);
        } catch (error) {
            setError(`API not work ${error.message}`);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getVerse()
    }, [language, verseNumber, number])
    // console.log(language === "English", "verse");


    function getTranselation() {

        const translationFound = verse.translations.find((translationObject) => {
            if (language === "English" && translationObject.author_name === "Swami Sivananda") {
                return translationObject.language === "english"
            }
            return translationObject.language === "hindi"
        })
        if (translationFound) {
            return translationFound.description;
        }
        return "translations not found";

    }
    function getCommentry() {
        const CommentaryFound = verse.commentaries.findLast((commentaryObject) => {
            if (language === "English") {
                return commentaryObject.language === "english"
            }
            return commentaryObject.language === "hindi"
        })
        if (CommentaryFound) {
            return CommentaryFound.description;
        }
        return "Commentary not Found";
    }



    if (!verse) return <h2>verse details not found</h2>
    if (loading) return <h2>verse details are loading</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div className='flex '>
            <div className='mt-[300px]'>
                <GrFormPrevious onClick={() => { prevIndex() }} size={50} className='cursor-pointer fixed ' />
            </div>
            <div>
                <h2 className=' text-5xl  text-center my-6 '><strong>BG {currentChapter + "." + currentIndex}</strong></h2>
                <div className='m-3'>
                    <div className="flex flex-col text-center items-center ">
                        <p className=' text-orange-500 text-4xl w-[550px]  my-6'>{verse.text}</p>
                        <p className={language === "English" ? "text-[23px] w-[550px] my-6" : "hidden"}>{verse.transliteration}</p>
                        <p className={language === "English" ? 'w-[863px] my-5 text-[18px]' : "hidden"}>{verse.word_meanings}</p>
                    </div>
                    <Divede />
                    <div className="flex flex-col items-center justify-center text-start">
                        <div className='w-[67%]'>
                            <h2 className='text-5xl mb-10 text-center'><strong> {language === "English" ? "Translation" : "अनुवाद"}  </strong></h2>
                            <p>{getTranselation()}</p>
                        </div>
                        <div className='w-[67%]'>
                            <h2 className='text-5xl my-10 text-center '><strong>{language === "English" ? "commentry" : "टीका"}</strong></h2>
                            <pre className='text-[18px] whitespace-pre-line '>{getCommentry()}</pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[300px]'>
                <MdNavigateNext onClick={() => { nextIndex() }} size={50} className='cursor-pointer fixed' />
            </div>
        </div>
    );
};

export default Verse;