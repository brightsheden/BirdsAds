'use client'
import Link from "next/link"
import {FaArrowDown, FaBasket, FaBasketShopping, FaBell, FaBolt, FaGifts, FaList, FaMessage, FaShop, FaUber} from 'react-icons/fa6'
import { Dropdown } from 'flowbite-react';

function layout({children}) {
  return (
    <main className="grid h-screen min-h-screen w-full lg:grid-cols-[280px_1fr]">
  <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <a className="flex items-center gap-2 font-semibold" href="#">
  
          <span className="">Advertiser Dashboard</span>
        </a>

        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="sr-only">Toggle notifications</span>
        </button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Overview
          </a>
         <Link  href='/advertiser/adcampaigns/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaShop/></span>
         <span>Adcampaigns</span>
       
         </Link>

         <Link  href='/advertiser/orders/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaBasketShopping/></span>
         <span>Orders</span>
       
         </Link>

         <Link  href='/advertiser/offers/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaGifts /></span>
         <span>Offers</span>
       
         </Link>

        
         <Link  href='/advertiser/boostedads/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaBolt /></span>
         <span>Boosted Adspaces</span>
       
         </Link>

         <Link  href='/advertisers/messages/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaMessage /></span>
         <span>Messages</span>
       
         </Link>

         <Link  href='/advertiser/notifications/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaBell /></span>
         <span>Notifications</span>
       
         </Link>
         
         <Link  href='/advertiser/withdraw'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaArrowDown /></span>
         <span>Withdraw</span>
       
         </Link>

          
         <Link  href='/advertiser/transactions/'     className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span><FaList /></span>
         <span>Transaction history</span>
       
         </Link>
         
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </div>
  </div>
  <div className="flex flex-col">
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <a className="lg:hidden" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
        <span className="sr-only">Home</span>
      </a>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search"
              type="search"
            />
          </div>
        </form>
      </div>
      <button
        className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
        type="button"
        id="radix-:r2c:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <img
          src="/placeholder.svg"
          width="32"
          height="32"
          className="rounded-full"
          alt="Avatar"
          style={{ aspectRatio: '32 / 32', objectFit: 'cover' }}
        />
        <span className="sr-only">Toggle user menu</span>
      </button>
    </header>
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    
      {/*  */}
    {children}
    </main>
  </div>
</main>

  )
}

export default layout