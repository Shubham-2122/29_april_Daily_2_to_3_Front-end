import React from 'react'
import ClassProps from './ClassProps'
import FunProps from './FunProps'

function Mainprops() {
  return (
    <div>
      {/* Props  */}
      {/* hello this props 
      1) class 
      2) function */}
      <div className="container">
        <h1>This class props</h1>
        <div className="row">
            <ClassProps title="Hello car1" desc="Hello car details 1" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*14urzn8*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzMDQxJGo1MyRsMCRoMA.." />
            <ClassProps title="hello car2" desc="Hello car details 2"  img="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?_gl=1*1secp3s*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzMTM0JGo1MyRsMCRoMA.."/>
             <ClassProps title="Hello car1" desc="Hello car details 1" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*14urzn8*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzMDQxJGo1MyRsMCRoMA.." />
            <ClassProps title="hello car2" desc="Hello car details 2"  img="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?_gl=1*1secp3s*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzMTM0JGo1MyRsMCRoMA.."/>
             <ClassProps title="Hello car1" desc="Hello car details 1" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*14urzn8*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzMDQxJGo1MyRsMCRoMA.." />
            <ClassProps title="hello car2" desc="Hello car details 2"  img="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?_gl=1*1secp3s*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzMTM0JGo1MyRsMCRoMA.."/>
        </div>
      </div>

      <div className="container">
        <h1>Hello this Function props</h1>
        <div className="row">
            <FunProps title="bike 1" desc="Hello this bike details" img="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?_gl=1*1uikkw8*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzNTk2JGo1MyRsMCRoMA.." />
             <FunProps title="bike 2" desc="Hello this bike details" img="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?_gl=1*1uikkw8*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzNTk2JGo1MyRsMCRoMA.." />
              <FunProps title="bike 3" desc="Hello this bike details" img="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?_gl=1*1uikkw8*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTY3OTMwMzQkbzE2JGcxJHQxNzU2NzkzNTk2JGo1MyRsMCRoMA.." />

        </div>
      </div>

        
     
       
    </div>
  )
}

export default Mainprops
