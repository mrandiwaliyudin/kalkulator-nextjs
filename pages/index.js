import React from 'react'
import Calc from './calc'

const index = () => {
  return (
    <div className=' bg-slate-800 w-full aspect-auto auto-cols-max '>
    <div className='    py-20 px-5 flex justify-around text-center my-20 box-border ml-96 mr-96'>
    <Calc />
    </div>
    </div>
  )
}

export default index