import './about.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='About'>
                <Sidebar />
                <div className="About-wrapper">
                    <div className="About-container">
                        <div className="about-header">
                            <h1>ABOUT THE FIRM</h1>
                            <hr></hr>
                        </div>
                        <div className="about-us">
                            <p>Advocates is one of India’s leading full-service law firms advising domestic and international clients for over four decades and providing a broad range of legal, taxation, regulatory and advisory services to the commercial, industrial and financial communities. Our Advocates serves the need of both small and large businesses, ranging from basic start-up work to complex legal issues and regulatory matters. Advocates currently operates through its offices located in New Delhi, Mumbai, Bengaluru and various affiliates across all metros and almost all mini-metro locations across India</p>
                            <p>
                                Vaish Associates Advocates draws its expertise from lawyers who have gained experience nationally and internationally, having worked on various assignments in India and abroad. Some members of our Advocates also hold additional qualifications as practicing Chartered Accountants, Cost Accountants and Company Secretaries. Advocates cherishes its long and close association with various Chambers of Commerce and Industry.
                            </p>
                            <p>
                                The broad practice areas of Advocates are Foreign Investment and Joint Ventures, Mergers and Acquisitions, Securities and Capital Markets, Corporate Laws (including regulatory practices), Exchange Control Regulations, Employment Laws, Licensing and Technology Transfer, Information Technology and Information Technology Enabled Services, Infrastructure Projects, Real Estate and
                                Construction, Private Equity, Project Finance, Intellectual Property Rights, Anti-Trust laws, Direct
                                and Indirect Taxation, Banking, Cyber laws, Corporate litigation, Civil Litigation, Criminal litigation
                                and Arbitration. Our firm is one of very few law firms in India having a unique combination of
                                corporate law and tax practice. This provides an edge, which is most critical for the success of
                                commercial transactions. Vaish Associates Advocates has supported numerous cross-border
                                transactions while providing the experience necessary to offer corporate and commercial,
                                international and domestic tax, labour and benefits, competition, intellectual property and
                                regulatory counsel to clients across all industries. Client satisfaction is a cornerstone of
                                our practice.

                            </p>
                            <p>
                                We are proud of the recognition we have received from our clients for our commitment to service,
                                and we value their satisfaction as the best measure of our success
                            </p>
                        </div>
                        <div className="contact">
                            <h1 className='c-h'>WHY HIRE ROULSTON URQUHART CRIMINAL DEFENCE LAWYERS?</h1>
                            <p>When your future and your freedom is on the line, our criminal defence lawyers will fight on your behalf to protect you and your rights.</p>
                            <button>CONTACT US</button>
                        </div>
                        <div className="our-vision">
                            <img src="/assets/bulb.svg" alt="" />
                            <div className="vision-title">
                                <h1>OUR VISION</h1>
                                <hr></hr>
                            </div>
                            <p className='V-M-P'>Our advocates strives to be a multi skill knowledge based law firm, driven by ethics and human values, delevering excellence and value in the field of legal service</p>
                        </div>
                        <div className="our-mission">
                            <img src="/assets/missionimg.svg" alt="" />
                            <div className="mission-title">
                                <h1 >OUR MISSION</h1>
                                <hr></hr>
                                <p className='M-P'>Our mission is to be the most preffered law firm within the indiam market, providing:</p>
                                <p className='M-P'>Clients with qualitative and innovative professional advice in atime bound and cost effective manner</p>
                                <p className='M-P'>Attorneys with a conductive environment for all ground growth and deveopment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
