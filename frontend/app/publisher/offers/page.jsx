import React from 'react';

function Page() {
  const offerList = [
    {
      id: 1,
      advertiserName: 'Plpfactoey',
      adSpaceName: 'AdSpace 1',
      offerPrice: 150,
      adSpacePrice: 200,
      status: 'Pending',
      date: '2024-01-01', // Replace with actual date
      time: '12:00 PM', // Replace with actual time
    },
    {
      id: 2,
      advertiserName: 'AnotherAd',
      adSpaceName: 'AdSpace 2',
      offerPrice: 200,
      adSpacePrice: 250,
      status: 'Approved',
      date: '2024-01-02', // Replace with actual date
      time: '2:30 PM', // Replace with actual time
    },
    // Add more Offer items as needed
  ];

  return (
    <div>
      {/* Offer Stats */}
      <div>
        <div className="stats shadow w-full gap-4 ">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Offers</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">Total number of Offers</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Approved Offers</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">Total Offers Approved</div>
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
          <a role="tab" className="tab hover:bg-gray-200">ALL</a>
          <a role="tab" className="tab tab-active hover:bg-gray-200">Pending</a>
          <a role="tab" className="tab hover:bg-gray-200">Approved</a>
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
                <th>Offer Price</th>
                <th>AdSpace Price</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {offerList.map((offer) => (
                <tr key={offer.id} className="bg-base-200">
                  <td>{offer.id}</td>
                  <td>{offer.advertiserName}</td>
                  <td>{offer.adSpaceName}</td>
                  <td>{offer.offerPrice}</td>
                  <td>{offer.adSpacePrice}</td>
                  <td>{offer.status}</td>
                  <td>{offer.date}</td>
                  <td>{offer.time}</td>
                  <td>
                    <button className="btn btn-outline ">Review</button>
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
