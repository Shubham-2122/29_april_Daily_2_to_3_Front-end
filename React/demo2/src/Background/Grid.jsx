import React from 'react'

function Grid() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2  grid-rows-3">
        <div className="box border-2">1</div>
        <div className="box border-2 col-span-2 row-span-2">2</div>
        <div className="box border-2">3</div>
        <div className="box border-2">4</div>
        <div className="box border-2">5</div>
        <div className="box border-2">6</div>
        <div className="box border-2">7</div>
        <div className="box border-2">8</div>
      </div>
    </div>
  )
}

export default Grid
