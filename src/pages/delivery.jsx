export const Delivery=()=>{
    // console.log("hello")
    return(

        <div className="bg-white p-6 md:px-28 rounded-lg shadow-md    font-Helvetica">
        <h2 className="text-2xl font-bold mb-4">Delivery Policy</h2>
      
        <h3 className="text-xl font-semibold mb-2">Business Days</h3>
        <p className="mb-4">Monday to Saturday</p>
      
        <hr className="my-4"/>
      
        <h3 className="text-xl font-semibold mb-2">General Information</h3>
        <p className="mb-4">
          We highly value every order from our esteemed customers and are grateful for the business opportunity offered to us. Thank you! Swift and safe delivery of your goods is crucial to us as it ensures better customer satisfaction and appraisal. To maintain the quality of our service, we have carefully selected our courier partners.
        </p>
        <p className="mb-4">
          Please note:
          <ul className="list-disc pl-5">
            <li>All deliveries must be signed for. If you are unavailable, kindly inform us of an alternative recipient, such as a colleague or neighbor.</li>
            <li>Sundays and public holidays are excluded from delivery schedules and may affect delivery times.</li>
          </ul>
        </p>
      
        <hr className="my-4"/>
      
        <h3 className="text-xl font-semibold mb-2">Delivery Charges and Times</h3>
      
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Orders Below ₦100,000</h4>
          <ul className="list-disc pl-5">
            <li>Delivery Cost: ₦2,500.00 within Lagos</li>
            <li>Delivery Time:
              <ul className="list-disc pl-5">
                <li>2 days max within Lagos</li>
                <li>5 days max outside Lagos</li>
              </ul>
            </li>
            <li>Orders placed after 4 pm will begin processing the next business day.</li>
            <li>Customers may occasionally be required to pick up their package from a designated office address.</li>
          </ul>
        </div>
      
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Orders Above ₦100,000</h4>
          <ul className="list-disc pl-5">
            <li>Delivery Cost: Free within Lagos</li>
            <li>Delivery Time:
              <ul className="list-disc pl-5">
                <li>2 days max within Lagos</li>
                <li>5 days max outside Lagos</li>
              </ul>
            </li>
            <li>Orders placed after 4 pm will begin processing the next business day.</li>
            <li>Customers may occasionally be required to pick up their package from a designated office address.</li>
          </ul>
        </div>
      
        <hr className="my-4"/>
      
        <h3 className="text-xl font-semibold mb-2">Important Information</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Mkhasa is not responsible for any damages caused after delivery.</li>
          <li>Mkhasa bears no responsibility for goods signed by an alternative person.</li>
          <li>All claims for shortages or damages must be reported to customer service on the day of delivery.</li>
          <li>We are unable to redirect orders once items have been shipped.</li>
        </ul>
      
        <p>If you have any further queries regarding Mkhasa delivery, please contact our Support Team at <a href="mailto:support@mkhasa.com" className="text-blue-500">support@mkhasa.com</a> from Monday to Saturday, 9.00 am - 8.00 pm.</p>
      </div>
      
          
    )
}