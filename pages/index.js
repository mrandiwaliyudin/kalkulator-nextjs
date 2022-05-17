import React from 'react'
import Calc from './calc'


const index = () => {
  return (
    <div className='bg-black bg-fixed  sm:bg-slate-800 h-full  auto-cols-max py-2 '>
    <div className='    py-10 px-3 flex justify-center text-center my-20 box-border '>
    <Calc />
    </div>
    </div>
  )
}

export default index