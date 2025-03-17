import React, { useContext } from 'react'
import QouteAbout from '../../comman/QouteAbout/QouteAbout'
import { languageContext } from '../../App';

function Acknowledgements() {

const {language} = useContext(languageContext)


  const organizations = [
    {
      name: "Advaita Ashrama",
      location: "5 Dehi Entally Road, Calcutta, India",
      contact: "Various phone lines and Fax available",
      email: "advaita@giascl01.vsnl.net.in",
      featuredWork: "Commentary on Bhagavadgita by Sankaracarya, translated by Swami Gambhirananda (Published in 1995)."
    },
    {
      name: "Central Chinmaya Mission Trust",
      location: "Sandeepany Sadhanalaya, Saki Vihar Road, Mumbai 400 072, India",
      phone: "91-22-8572367/8575806",
      fax: "91-22-8573065",
      email: "chinmaya@bom2.vsnl.net.in",
      featuredWork: "Srimadbhagavadgita translated by Swami Tejomayananda (1993, Central Chinmaya Mission Trust, Bombay) [Hindi translation of The Holy Geeta by Swami Chinmayananda]"
    },
    {
      name: "Divine Life Society",
      location: "P.O. Shivanandanagar 249192, District Tehri-Garhwal, Uttar Pradesh, Himalayas, India",
      featuredWork: "The Bhagavad Gita by Swami Sivananda (1995, The Divine Life Society, Shivanandanagar)"
    },
    {
      name: "Gita Press, Gorakhpur",
      location: "Govind Bhavan Karyalaya, Gitapress, Gorakhpur 273005, Uttar Pradesh, India",
      phone: "334721",
      featuredWork: [
        "Srimadbhagavadgita: with Hindi translation of Sankarabhashya translated by Sri Harikrishandas Goenka (1998, Gita Press, Gorakhpur)",
        "Srimadbhagavadgita: Sadhaka Sanjivani (Hindi Commentary) by Swami Ramsukhdas (1995, Gita Press, Gorakhpur)"
      ]
    },
    {
      name: "Sri Venkateswara University, Tirupati",
      location: "Oriental Research Institute, Sri Venkateswara University, Tirupati 517502, Andhra Pradesh, India",
      phone: "91-8574-24166-Extension 291",
      fax: "91-8574-24111",
      featuredWork: "Srimadbhagavadgita with Gitarthasangraha of Abhinavagupta Part 1 & 2. Translation by Dr. S Sankaranarayan (1985, Sri Venkateswara University, Tirupati)"
    },
    {
      name: "Gita Supersite IITK Team",
      website: "gitasupersite.iitk.ac.in",
      description: "We extend special thanks to the team at Gita Supersite by IIT Kanpur for their hard work in collating various translations and commentaries of the Bhagavad Gita in one comprehensive platform."
    }
  ];



  return (
    <div>
      <div>
        <QouteAbout src="/quotes-bg.webp" name={language=== "English"?"Acknowledgements":"स्वीकृतियाँ "}/>
      </div> 
      <div className='flex  justify-center my-[60px]'>
        <div className=' w-[970px]'>
          <div>
            <p>We extend our heartfelt gratitude to the esteemed organizations listed below for allowing us to feature their invaluable publications. All copyrights are retained by the respective organizations. For acquiring individual copies of any books, please directly contact the relevant organization.</p>
          </div>
          <div className='grid grid-cols-2 gap-x-8 gap-y-5 mt-8'>
            {
              organizations.map((value, index) => {

                return <div key={index} className='w-[400px] text-[14px] mt-[10px]  leading-[20px] p-[20px] shadow-md shadow-gray-500 rounded-2xl'>
                  {value.name ? <span><strong>   {value.name}</strong></span> : ""}
                  <div>
                    {value.location ? <address>Located: {value.location}</address> : ""}
                    {value.contact ? <span>contact: {value.contact}</span> : ""}
                    {value.phone && value.fax ? <span>phone: {value.phone} | {value.fax}</span> : ""}
                    {value.email ? <span>Email: {value.email}</span> : ""}
                  </div>
                  
                  {value.website ? <span>webiste: {value.website}</span> : ""}
                  {Array.isArray(value.featuredWork) ? (
                    <ul>
                      Featured Works:
                      {value.featuredWork.map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    value.featuredWork && <p>{value.featuredWork}</p>
                  )
                  }
                  {value.description ? <span>Featured Works: {value.description}</span> : ""}
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Acknowledgements