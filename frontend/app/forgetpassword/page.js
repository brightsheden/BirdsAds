import React from 'react'

function page() {
  return (
    <div>
        <main className="flex items-center justify-center h-screen bg-white md:bg-gray-100 dark:bg-gray-900">
  <div className="rounded-lg border-none md:border bg-card text-card-foreground shadow-sm max-w-md mx-auto" data-v0-t="card">
    <div className="flex flex-col p-6 space-y-1">
      <h3 className="tracking-tight text-2xl font-bold">Forgot Password</h3>
      <p className="text-sm text-muted-foreground">
        Enter your email below to receive a password reset link
      </p>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <button
          className="btn inline-flex text-white items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          type="submit"
        >
          Send reset link
        </button>
      </div>
      <div className="mt-4 text-center text-sm">
        Remembered your password? <a className="underline" href="#">
          Back to Login
        </a>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default page
