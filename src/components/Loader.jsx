import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center">
        
        <div className="inline-block w-12 h-12 border-4 border-gray-700 border-t-green-400 rounded-full animate-spin mb-6"></div>
        
        <p className="text-gray-300 text-lg font-semibold">Loading games...</p>
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader