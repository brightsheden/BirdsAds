import React from 'react';

function Page() {
  return (
    <div>
        <div className=' mb-4'>
            <h2 className=' font-semibold text-lg'>Edit Adcampaign</h2>
        </div>


        <form className='flex flex-col md:flex-row lg:flex-row w-full gap-8'>
      <div className='space-y-4 w-full'>
        <div>
          <img
            src='https://img.freepik.com/free-vector/billboard-with-spotlights-sky_23-2147497971.jpg?w=740&t=st=1706570546~exp=1706571146~hmac=bc4df48f7ea96a228cba8fb28e12c5fee865ef7b5f0f09d0d0b5ce05b95460b8'
            alt='image'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='name' className='text-sm font-medium text-gray-700'>
            Campaign Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Type Name'
            className='input bg-gray-200 focus:outline-none w-full'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='category' className='text-sm font-medium text-gray-700'>
            Category
          </label>
          <select
            id='category'
            className='select bg-gray-200 focus:outline-none w-full'
          >
            <option disabled selected>
              Category
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>

      <div className='space-y-4 w-full'>
        <div className='flex flex-col'>
          <label htmlFor='adFormat' className='text-sm font-medium text-gray-700'>
            Ad Format
          </label>
          <select
            id='adFormat'
            className='select bg-gray-200 focus:outline-none w-full'
          >
            <option disabled selected>
              Ad Format
            </option>
            <option>Native</option>
            <option>Video</option>
            <option>Text and Image</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='adPlacement' className='text-sm font-medium text-gray-700'>
            Ad Placement
          </label>
          <select
            id='adPlacement'
            className='select bg-gray-200 focus:outline-none w-full'
          >
            <option disabled selected>
              Ad Placement
            </option>
            <option>Website</option>
            <option>Social Media</option>
            <option>Apps</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='price' className='text-sm font-medium text-gray-700'>
            Price
          </label>
          <input
            id='price'
            type='number'
            value={30}
            placeholder='Type Price'
            className='input bg-gray-200 focus:outline-none w-full'
          />
        </div>

        <div className='flex flex-col '>
        <label htmlFor='audience' className='text-sm mb-2 font-medium text-gray-700'>
            Campaign Content
          </label>
        <textarea rows={5} placeholder="Start typing" className="textarea textarea-bordered bg-gray-200 textarea-md w-full " ></textarea>

        </div>
                

        <div className='flex flex-col'>
          <label htmlFor='audience' className='text-sm font-medium text-gray-700'>
            Target Audience
          </label>
          <textarea
            id='audience'
            rows={5}
            placeholder='Who are your audience'
            className='textarea bg-gray-200 focus:outline-none w-full'
          ></textarea>
        </div>

    
        <div className='flex flex-col'>
          <label htmlFor='link' className='text-sm font-medium text-gray-700'>
            Link to website/landing page etc
          </label>
          <input
            id='link'
            type='text'
            placeholder='Link to your ad space website, app, or social media account'
            className='input bg-gray-200 focus:outline-none w-full'
          />
        </div>

        <div className='flex space-x-3 justify-center'>
          <button className='btn btn-outline btn-primary w-40'>
            Update
          </button>
          <button className='btn btn-outline btn-primary w-40'>
            Delete
          </button>
        </div>
      </div>
    </form>


    </div>
  
  );
}

export default Page;
