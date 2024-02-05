import React from 'react';
import { FaPlus } from 'react-icons/fa6';

function AdCampaignPage() {
  const adCampaignList = [
    {
      id: 1,
      title: 'Campaign 1',
      image: 'https://placekitten.com/40/40', // Replace with actual image URL
      price: 200,
      adType: 'Website',
      adFormat: 'Display',
      adPlacement: 'Homepage',
      status: 'Active',
      date: '2024-01-01',
    },
    {
      id: 2,
      title: 'Campaign 2',
      image: 'https://placekitten.com/40/41', // Replace with actual image URL
      price: 250,
      adType: 'App',
      adFormat: 'Video',
      adPlacement: 'Sidebar',
      status: 'Draft',
      date: '2024-01-02',
    },
    // Add more Ad Campaign items as needed
  ];

  return (
    <div>
      {/* Stats */}
   <div className="stats shadow">
     
     <div className="stat">
       <div className="stat-figure text-primary">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
       </div>
       <div className="stat-title">Total Ad Campaigns</div>
       <div className="stat-value text-primary">25.6K</div>
       <div className="stat-desc">All campaigns </div>
     </div>
     
     <div className="stat">
       <div className="stat-figure text-secondary">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
       </div>
       <div className="stat-title">Active</div>
       <div className="stat-value text-secondary">2.6M</div>
       <div className="stat-desc">21% more than last month</div>
     </div>
     
     <div className="stat">
       <div className="stat-figure text-secondary">
      
       </div>
       <div className="stat-value">86%</div>
       <div className="stat-title">Drafts</div>
       <div className="stat-desc text-secondary">31 tasks remaining</div>
     </div>
     
   </div>

      <div className='mb-4 mt-4 '>
        <div>
          <button className="btn bg-primary text-white hover:bg-primary">
            <FaPlus />
            Add New Campaign
          </button>
        </div>
        <div role="tablist" className="tabs tabs-bordered mb-4">
          <a role="tab" className="tab">ALL</a>
          <a role="tab" className="tab tab-active">Active</a>
          <a role="tab" className="tab">Drafts</a>
        </div>
      </div>

      {/* Table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Ad Type</th>
                <th>Ad Format</th>
                <th>Ad Placement</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adCampaignList.map((adCampaign) => (
                <tr key={adCampaign.id} className="bg-base-200">
                  <th>{adCampaign.id}</th>
                  <td>{adCampaign.title}</td>
                  <td>
                    <img
                      src={adCampaign.image}
                      alt={`Image for ${adCampaign.title}`}
                      className="rounded-full w-8 h-8"
                    />
                  </td>
                  <td>{adCampaign.price}</td>
                  <td>{adCampaign.adType}</td>
                  <td>{adCampaign.adFormat}</td>
                  <td>{adCampaign.adPlacement}</td>
                  <td>{adCampaign.status}</td>
                  <td>{adCampaign.date}</td>
                  <td>
                    <button className="btn btn-sm btn-warning">View</button>
                    <button className="btn btn-sm btn-error ml-2">Delete</button>
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

export default AdCampaignPage;
