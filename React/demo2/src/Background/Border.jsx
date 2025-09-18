import React from 'react'

function Border() {
  return (
    <div>
      <h1 className='border-2 border-amber-600 border-dashed'>Hello border data</h1>
      <h1 className='border-4 border-green-400'>Hello border data</h1>
      <h1 className='border-8 border-b-blue-900 border-dotted'>Hello border data</h1>

      <h1 className='border-2 rounded-3xl border-green-400'>Hello border data</h1>
      <h1 className='border-4 rounded-4xl border-green-400'>Hello border data</h1>

      <h1 className='outline-2 border-2 border-amber-500 outline-red-400'>outline</h1>
    </div>
  )
}

export default Border
