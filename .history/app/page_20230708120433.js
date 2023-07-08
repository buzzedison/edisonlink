import Image from "next/image"

export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <Image
              className="w-24 h-24 rounded-full object-cover"
              width={200}
              height={200}
              src="/images/edison.jpg"
              alt="Your Name"
            />
            <h1 className="mt-4 text-2xl font-semibold">Edison Ade</h1>
            <p className="text-gray-600 text-center mt-2">
            Guiding businesses to start, scale and grow profitably with insightful strategies, branding, and self-care. 
            <span className="font-extrabold italic">Passionate about AI & Tech, writing, coding, and helping businesses thrive </span>
            </p>
          </div>

          <ul className="space-y-4">
            {/* Add your links below */}
            <li>
              <a
                href="https://twitter.com/buzzedison"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-black hover:bg-gray-700 text-white font-semibold"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://buzzedisoncom"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-blue-900 hover:bg-blue-700 text-white font-semibold"
              >
                Website
              </a>
            </li>

            <li>
              <a
                href="https://www.threads.net/@gbengaedison"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-gray-600 hover:bg-gray-400 text-white font-semibold"
              >
                Threads
              </a>
            </li>

            <li>
              <a
                href="https://buzzedison.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 text-black font-semibold"
              >
               Medium 
              </a>
            </li>

            <li>
              <a
                href="https://futureforwardhub.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-orange-700 hover:bg-orange-500 text-white font-semibold"
              >
              Substack 
              </a>
            </li>
         
            <li>
              <a
                href="https://www.linkedin.com/in/buzzedison/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold"
              >
               Linkedin
              </a>
            </li>

            <li>
              <a
                href="https://outlook.office365.com/owa/calendar/BuzzedisonConsulting@bloopglobal.com/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-pink-700 hover:bg-pink-600 text-white font-semibold"
              >
               Bookings
              </a>
            </li>

            <li>
              <a
                href="https://www.amazon.com/stores/author/B09HP3QSSC/allbooks"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 rounded bg-purple-800 hover:bg-purple-700 text-white font-semibold"
              >
              My Books
              </a>
            </li>
          </ul>
        </div>
        </div>
    </>
  )
}
