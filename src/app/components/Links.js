import React from 'react'

import Link from 'next/link'

const Links = () => {
  return (
    <div>
      <Link href="/contact">
            <button className="mt-6 mr-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Let’s Connect!
            </button>
          </Link>
          <Link href="/project" >
            <button className="mt-6  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Explore My Work
            </button>
          </Link>
    </div>
  )
}

export default Links
