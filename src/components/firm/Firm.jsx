import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './firm.css'

const Firm = () => {
    const Items = ["Popular Solutions","Account Settings","Safety & Covid19 Querries", "F.A.Q", "Services","Payment Option", "A Guide To Our Company"]
  return (
    <>
    <Navbar />
    <div className='Firm'>
      <Sidebar />
      <div className="firm-wrapper">
        <div className="firm-container">
            <div className="firm-header">
                <div className="firm-header-top">
                    <h2>CUSTOMER SUPPORT</h2>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa saepe, iusto quis iste labore harum repellendus exercitationem fuga quidem eligendi. Impedit ipsum exercitationem qui voluptatum, ullam corporis natus possimus?</p>
                </div>
                <img src="/assets/customersupport.svg" alt="" />
            </div>
            <div className="firm-bottom">
                {
                    Items.map((item,i)=>{
                        return (
                            <div className="firm-item" key={i}>
                            <b>{item}</b>
                        </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Firm
