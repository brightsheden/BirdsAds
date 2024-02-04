import React from 'react';

function OrderDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-6">
      {/* User Details */}
      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg">User Details</h2>
        <div className="flex items-center space-x-4 text-sm ">
         <div>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://shedenbright.pythonanywhere.com/images/download_4.jpeg" />
            </div>
          </div>
         </div>

         <div className='flex flex-col'>
          <p className='text-xl font-bold'>Brand name</p>
          <p>Brand Email</p>
         
         </div>


        </div>
        <h3 className="font-semibold text-base mt-4">Brand Bio</h3>
        <div className="text-sm">
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro culpa autem doloribus repudiandae incidunt neque consequatur fuga, aspernatur quidem, magnam, iusto at adipisci atque eum ipsum tenetur ullam voluptatem?</p>
        </div>
      </div>

      {/* Ad Space Details */}
      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold text-lg">Adspace Details</h2>
       <div className='relative'>
       
          <img src='https://c8.alamy.com/comp/DA776W/covered-bus-stop-ad-space-advertisement-virginia-usa-DA776W.jpg' className=' rounded-md object-cover w-full h-40'/>
          <span className='font-bold bg-gray-200 rounded-full p-2 leading-3 top-1 bottom-2'>#5000</span>
      
       </div>

       <div>
        <h2 className='font-semibold text-base'>Adspace Name</h2>
        <div>
          <ul>
            <li>Format: Native Ads</li>
            <li>type: Social Ads</li>
            <li>type: Social Ads</li>
            <li>type: Social Ads</li>
          </ul>
        </div>
       </div>
      </div>

      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold text-lg">Adspace Details</h2>
       <div className='relative'>
       
          <img src='https://5.imimg.com/data5/SELLER/Default/2020/9/IE/XO/XF/113340239/ad-campaign-designing-service.jpg' className=' rounded-md object-cover w-full h-40'/>
         
      
       </div>

       <div>
        <h2 className='font-semibold text-base'>Ad Campaign details</h2>
        <div>
          <ul>
            <li>Format: Native Ads</li>
            <li>type: Social Ads</li>
            <li>type: Social Ads</li>
            <li>type: Social Ads</li>
          </ul>
        </div>
       </div>
      </div>

      {/* Payment Details */}
      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg">Payment Details</h2>
        <div className="text-sm">
          <p>
            <strong>Payment Method:</strong> Visa ending in 1234
          </p>
          <p>
            <strong>Total Cost:</strong> $100.00
          </p>
         
          <p>
            <strong>Fees:</strong> $2.00
          </p>
        </div>
        <h3 className="font-semibold text-lg mt-4">Review & Confirm</h3>
        <div className="text-sm">
          <p>Please review the payment details and click confirm to complete your order.</p>
        </div>

        <div>
          <select className="select ring-0 outline-none bordered w-full max-w-xs">
            <option disabled selected>Change Status</option>
            <option>Posted</option>
            <option>Confirmed</option>
          </select>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;
