

export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="/your-photo.jpg"
              alt="Your Name"
            />
            <h1 className="mt-4 text-2xl font-semibold">Edison Ade</h1>
            <p className="text-gray-600 text-center mt-2">
            Aspiring Venture Capitalist | Entrepreneur | Business Coach 🎯 Guiding businesses in the digital age with insightful strategies, branding, and self-care.
            </p>
          </div>

          <ul className="space-y-4">
            {/* Add your links below */}
            <li>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 text-black font-semibold"
              >
                Website
              </a>
            </li>
         
          </ul>
        </div>
        </div>
    </>
  )
}
