import React, { useContext } from 'react'
import QouteAbout from '../../comman/QouteAbout/QouteAbout'
import { languageContext } from '../../App'

function Donet() {
    const {language} = useContext(languageContext)
    return (
        <div>
            <QouteAbout name={language === "English"?"Donet":"दान करें"} src="/banner2.webp" />
            <div className='flex items-center justify-center'>
                <div className='my-15 text-center w-[940px] '>
                    <h3 className=' text-3xl my-8'><strong>Support the Digital Revival of Ancient Wisdom</strong></h3>
                    <div className='mb-3.5 text-[18px] font-semibold '>
                        <p className='mb-4'>
                            Your generous support enables the Ved Vyas Foundation to offer a suite of spiritual resources entirely free of charge and devoid of distractions. By donating, you help us maintain and expand our offerings, such as the ad-free Bhagavad Gita website, mobile apps and GitaGPT AI chatbot, ensuring that the essence of Sanatana Dharma reaches the hands and hearts of seekers around the world without any barriers.
                        </p>
                        <p className='mb-4'>
                            Our dedication is to the digitization and modern presentation of the Ramayan, Mahabharat, Vedas, Puranas, and other precious Indian scriptures. With your contribution, we continue to create and innovate—providing state-of-the-art applications for state-of-the-art spirituality, accessible to all, anytime and anywhere.
                        </p>
                    </div>
                    <div className='flex flex-col items-center mt-3.5 gap-[10px]'>
                        <img src="/upi_qr_radhakrishna.webp" alt="" className='w-[250px]  my-3' />
                        <h4><strong>Scan the QR code with any UPI app to make your donation.</strong></h4>
                        <p> <strong>UPI ID: <span className='text-orange-500'>vedvyasfoundation@icici</span></strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donet