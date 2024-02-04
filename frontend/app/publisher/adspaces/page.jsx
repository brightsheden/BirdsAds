'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa6';

function page() {
  const adSpaceList = [
    {
      id: 1,
      avatar: 'https://placekitten.com/40/40', // Replace with actual avatar URL
      name: 'AdSpace 1',
      price: 200,
      adType: 'Website',
      adFormat: 'Display',
      adPlacement: 'Homepage',
      category: 'Technology',
      sales: 150,
      views: 1000,
    },
    {
      id: 2,
      avatar: 'https://placekitten.com/40/41', // Replace with actual avatar URL
      name: 'AdSpace 2',
      price: 250,
      adType: 'App',
      adFormat: 'Video',
      adPlacement: 'Sidebar',
      category: 'Fashion',
      sales: 120,
      views: 800,
    },
    // Add more AdSpace items as needed
  ];


  return (
    <div>
      {/* stats */}
      <div>
        <div className="stats shadow w-full gap-4 ">
          
          <div className="stat ">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <div className="stat-title">Total Adspace</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">Total amount of your adspace</div>
            </div>
            
            <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Approved Adspace</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">Total Adspace Approve</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Pending</div>
          
          </div>
          
        </div>
      </div>

      <div className='mb-4 mt-4 '>
        <div><button className="btn bg-primary text-white hover:bg-primary">
        <FaPlus/>
          Add New space
        </button></div>
      <div role="tablist" className="tabs tabs-bordered mb-4">
        <a role="tab" className="tab">ALL</a>
        <a role="tab" className="tab tab-active">Pending</a>
        <a role="tab" className="tab">Drafts</a>
      </div>
      </div>

      {/*table*/}
      
      <div>
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Price</th>
            <th>Ad Type</th>
            <th>Ad Format</th>
            <th>Ad Placement</th>
            <th>Category</th>
            <th>Sales</th>
            <th>Views</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adSpaceList.map((adSpace) => (
            <tr key={adSpace.id} className="bg-base-200">
              <th>{adSpace.id}</th>
              <td>
                <img
                  src={adSpace.avatar}
                  alt={`Avatar for ${adSpace.name}`}
                  className="rounded-full w-8 h-8"
                />
              </td>
              <td>{adSpace.name}</td>
              <td>{adSpace.price}</td>
              <td>{adSpace.adType}</td>
              <td>{adSpace.adFormat}</td>
              <td>{adSpace.adPlacement}</td>
              <td>{adSpace.category}</td>
              <td>{adSpace.sales}</td>
              <td>{adSpace.views}</td>
              <td>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-error ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>









    </div>
  )
}

export default page