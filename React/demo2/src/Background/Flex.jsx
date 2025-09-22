import React from 'react'

function Flex() {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3">
                <div className="box w-52 h-52 bg-amber-400 border-2">
                    <img className='blur-sm' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/17978501/pexels-photo-17978501.jpeg?_gl=1*1bhfhvt*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg1MjA1MDAkbzE5JGcxJHQxNzU4NTIwNTA3JGo1MyRsMCRoMA.." alt="" />
                </div>
                <div className="box w-52 h-52 border-2">
                    <img className='brightness-125' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/17978501/pexels-photo-17978501.jpeg?_gl=1*1bhfhvt*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg1MjA1MDAkbzE5JGcxJHQxNzU4NTIwNTA3JGo1MyRsMCRoMA.." alt="" />
                </div>
                <div className="box w-52 h-52 border-2" >
                    <img className='contrast-125' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/17978501/pexels-photo-17978501.jpeg?_gl=1*1bhfhvt*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg1MjA1MDAkbzE5JGcxJHQxNzU4NTIwNTA3JGo1MyRsMCRoMA.." alt="" />
                </div>
                <div className="box w-52 h-52 border-2">
                    <img className='hue-rotate-180' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/17978501/pexels-photo-17978501.jpeg?_gl=1*1bhfhvt*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg1MjA1MDAkbzE5JGcxJHQxNzU4NTIwNTA3JGo1MyRsMCRoMA.." alt="" />
                </div>
                <div className="box rotate-90 w-52 h-52 border-2">2</div>
                <div className="box scale-75 w-52 h-52 border-2" >3</div>
                <div className="box skew-6 w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 bg-[#49d51a] border-2">2</div>
                <div className="box w-52 h-52 text-[50px] hover:bg-orange-500 transition duration-700 hover:scale-110 bg-[rgba(32,203,212,0.78)] border-2" >3</div>
                <div className="box w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 border-2">2</div>
                <div className="box w-52 h-52 border-2" >3</div>
                <div className="box w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 border-2">2</div>
                <div className="box w-52 h-52 border-2" >3</div>
            </div>
            {/* <div className="flex justify-center">
                <div className="box w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 border-2">2</div>
                <div className="box w-52 h-52 border-2" >3</div>
            </div>
            <div className="flex justify-end">
                <div className="box w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 border-2">2</div>
                <div className="box w-52 h-52 border-2" >3</div>
            </div>
            <div className="flex justify-between">
                <div className="box w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 border-2">2</div>
                <div className="box w-52 h-52 border-2" >3</div>
            </div>
            <div className="flex justify-around">
                <div className="box w-52 h-52 border-2">1</div>
                <div className="box w-52 h-52 border-2">2</div>
                <div className="box w-52 h-52 border-2" >3</div>
            </div> */}
        </div>
    )
}

export default Flex
