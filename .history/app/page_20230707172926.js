

export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-gray-100">
  

      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bitly Clone</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shorten your URL</h2>
          <form>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                className="bg-gray-100 w-full text-lg py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your URL"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Shorten
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    </>
  )
}
