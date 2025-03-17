import React from 'react'
import QouteAbout from "../../comman/QouteAbout/QouteAbout"

function Privacy() {
    return (
        <div>
            <div>
                <QouteAbout name="Privacy Policy - BhagavadGita.io" src="quotes-bg.webp" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[950px] grid gap-2'>
                    <div>
                        <p className='my-[12px]'>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <p className='my-[4px]'>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                    </div>

                    <div className='font-bold'>
                        <h2>Interpretation and Definitions</h2>
                    </div>
                    <div className='ml-3'>
                        <h3 >Interpretation</h3>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    </div>

                    <div>
                        <h3 className='font-bold'>Definitions</h3>
                        <p>For the purposes of this Privacy Policy:</p>

                        <ul className='list-disc ml-10'>
                            <li><strong>Account</strong> A unique account created for You to access our Service...</li>
                            <li><strong>Affiliate</strong> An entity that controls, is controlled by, or is under common control with a party...</li>
                            <li><strong>Company</strong> Refers to Ved Vyas Foundation...</li>
                            <li><strong>Cookies</strong> Small files placed on Your computer...</li>
                            <li><strong>Country</strong> Refers to Haryana, India...</li>
                            <li><strong>Device</strong> Any device that can access the Service...</li>
                            <li><strong>Personal Data</strong> Any information that relates to an identified or identifiable individual...</li>
                        </ul>
                    </div>

                    <div className='leading-13 mt-3'>
                        <h2 className='font-bold text-2xl'>Collecting and Using Your Personal Data</h2>
                        <h3 className='font-bold text-[20px]'>Types of Data Collected</h3>
                    </div>
                    <div>
                        <h4 className='font-bold text-[18px]'>Personal Data</h4>
                        <div className='ml-4'>
                        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information...</p>
                        <ul className='list-disc ml-10'>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Usage Data</li>
                        </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-[18px]'>Usage Data</h3>
                        <p className='ml-4'>Usage Data is collected automatically when using the Service...</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Tracking Technologies and Cookies</h3>
                        <p className='ml-4'>We use Cookies and similar tracking technologies to track the activity on Our Service...</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Use of Your Personal Data</h2>
                        <div className='ml-4'>
                        <p>The Company may use Personal Data for the following purposes:</p>
                        <ul className='list-disc ml-6'>
                            <li>To provide and maintain our Service...</li>
                            <li>To manage Your Account...</li>
                            <li>To contact You...</li>
                            <li>To manage Your requests...</li>
                        </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold'>Retention of Your Personal Data</h2>
                        <p className='ml-4'>The Company will retain Your Personal Data only for as long as necessary...</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Transfer of Your Personal Data</h2>
                        <p className='ml-4'>Your information, including Personal Data, is processed at the Company's operating offices...</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Delete Your Personal Data</h2>
                        <p className='ml-4'>You have the right to delete or request that We assist in deleting the Personal Data...</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Disclosure of Your Personal Data</h2>
                        <p className='ml-4'>Under certain circumstances, the Company may be required to disclose Your Personal Data...</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Security of Your Personal Data</h2>
                        <p className='ml-4'>The security of Your Personal Data is important to Us...</p>
                    </div>

                    <div>
                        <h2 className='font-bold'>Children's Privacy</h2>
                        <p className='ml-4'>Our Service does not address anyone under the age of 13...</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Links to Other Websites</h2>
                        <p className='ml-4'>Our Service may contain links to other websites that are not operated by Us...</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium'>Changes to this Privacy Policy</h2>
                        <div className='ml-4'>
                        <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                        <p className='my-3'>  We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-medium text-2xl'>Contact Us</h2>
                        <p className='ml-4'> If you have any questions about this Privacy Policy, You can contact us:</p>
                        <ul className='list-disc ml-10'>
                            <li>By email: contact@bhagavadgita.io</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy