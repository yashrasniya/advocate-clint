import './transaction.css'

const Payments = () => {
  return (
    <div className='payment'>
        <div className='payment-info'>
            <img src='/assets/onlineImages/person3.svg' alt='payment'></img>
            <div className="payment-user-info">
                <p className='u-name'><span>John Smith</span></p>
                <span style={{fontSize:"16px",color:"grey",marginBottom:"8px"}}>city</span>
                <span className='payment-date'>date</span>
            </div>
        </div>
        <div className='payment-amount'>
            <span className='amount-title'>Amount</span>
            <h1>$100.00</h1>
        </div>
    </div>
  )
}

export default Payments
