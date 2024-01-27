import React from 'react'

export default function page() {
  return (
    <div>
<main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
  <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
        Sign in to your account
      </h2>
    </div>
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
            htmlFor="email-address"
          >
            Email address
          </label>
          <input
            className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="email-address"
            autoComplete="email"
            required
            placeholder="Email address"
            type="email"
            name="email"
          />
        </div>
        <div>
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        
          <input
            aria-hidden="false"
            tabIndex="-1"
            type="checkbox"
            value="on"
            name="remember-me"
            className='toggle'
          
          />
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2 block text-sm text-gray-900 dark:text-gray-100"
            htmlFor="remember-me"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          className="items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
    <div className="flex items-center justify-center">
      <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
        Don't have an account? Sign up
      </a>
    </div>
  </div>
</main>

    </div>
  )
}
