import './transaction.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Payments from './Payments'

const Transaction = () => {
  return (
  <>
  <Navbar />
  <div className="transactions">
    <Sidebar />
    <div className="transaction-history">
      <h1 style={{padding:"20px"}}>Transaction History</h1>
      <Payments />
      <Payments />
      <Payments />
      <Payments />
      <Payments />
      <Payments />
      <Payments />

    </div>
    <div className="account-details">
    <div className='bankdetails-header'>
        <div className='add-details-info'>
        <span className='add-details'>ADD BANK DETAILS</span>
        <span style={{color:"rgb(23, 179, 232)",fontSize:"14px"}}>change Bank</span>
        </div>
        <div className="ac-details">
          <div className='feild'>
            <span>Account Number</span>
            <input type='text' placeholder='account number'></input>
          </div>

          <div className='feild'>
            <span>Confirm Account Number</span>
            <input type='text' placeholder='Confirm account number'></input>
          </div>

          <div className='feild'>
            <span>Bank Name</span>
            <input type='text' placeholder='Bank Name'></input>
          </div>
          
          <div className='feild'>
            <span>IFSC Code</span>
            <input type='text' placeholder='IFSC code'></input>
          </div> 

          <div className='feild'>
            <span>Bank Address</span>
            <input type='text' placeholder='Bank Address'></input>
          </div>
          
          {/* <div className="feild"> */}
          <div className='save-ac'>
            <input type="checkbox" className='check-box'></input>
            <span>save account</span>
            </div>
          {/* </div> */}
        </div>
        <button className='add-bank-ac'>Add bank Account</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Transaction
