import React from 'react';

function Page() {
  const adSpaceList = [
    {
      id: 1,
      advertiserName: 'Plpfactoey',
      adSpaceName: 'AdSpace 1',
      adSpaceImage: 'https://placekitten.com/40/40', // Replace with actual image URL
      totalPrice: 200,
      paid: 'Yes', // Replace with actual paid status
      status: 'Pending',
      date: '2024-01-01', // Replace with actual date
      time: '12:00 PM', // Replace with actual time
    },
    {
      id: 2,
      advertiserName: 'AnotherAd',
      adSpaceName: 'AdSpace 2',
      adSpaceImage: 'https://placekitten.com/40/41', // Replace with actual image URL
      totalPrice: 250,
      paid: 'No', // Replace with actual paid status
      status: 'Confirmed',
      date: '2024-01-02', // Replace with actual date
      time: '2:30 PM', // Replace with actual time
    },
    // Add more AdSpace items as needed
  ];

  return (
    <div>
      {/* Stats */}
      <div>
        <div className="stats shadow w-full gap-4 ">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Orders</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">Total amount of your Orders</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Confirmed Orders</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">Total Orders Approve</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Pending</div>
          </div>
        </div>
      </div>

      <div className='mb-4 mt-4 '>
        <div role="tablist" className="tabs tabs-bordered mb-4">
          <a role="tab" className="tab">ALL</a>
          <a role="tab" className="tab tab-active">Pending</a>
          <a role="tab" className="tab">Drafts</a>
        </div>
      </div>

      {/* Table */}
      <div className='mt-8'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>S/N</th>
                <th>Advertiser Name</th>
                <th>AdSpace Name</th>
                <th>AdSpace Image</th>
                <th>Total Price</th>
                <th>Paid</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adSpaceList.map((adSpace) => (
                <tr key={adSpace.id} className="bg-base-200">
                  <td>{adSpace.id}</td>
                  <td>{adSpace.advertiserName}</td>
                  <td>{adSpace.adSpaceName}</td>
                  <td>
                    <img
                      src={adSpace.adSpaceImage}
                      alt={`Image for ${adSpace.adSpaceName}`}
                      className="rounded-full w-8 h-8"
                    />
                  </td>
                  <td>{adSpace.totalPrice}</td>
                  <td>{adSpace.paid}</td>
                  <td>{adSpace.status}</td>
                  <td>{adSpace.date}</td>
                  <td>{adSpace.time}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Review</button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
