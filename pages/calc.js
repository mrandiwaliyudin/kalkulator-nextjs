/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import Button from './Button'



const Calc = () => {

const [AngkaPertama, setAngkaPertama] = useState(null)
 const [AngkaKedua, setAngkaKedua] = useState(null)
 const [operator, setOperator] = useState(null)
 const [DisplayNumber, setDisplayNumber] = useState(null)
 const [result, setResult] = useState(null)

useEffect(() => {
   showNumber() 
}, [AngkaPertama,operator,AngkaKedua ])

  function showNumber() {
    if (result) {
      setDisplayNumber(result)
    } else if (!operator) {
      setDisplayNumber(AngkaPertama)
    } else {
      setDisplayNumber(AngkaKedua)
    }

  }



 const handleNumber = (val) => {
   setResult(null)
if (!AngkaPertama && !operator) {
  setAngkaPertama(val.toString())
} else if (AngkaPertama && !operator) {
  setAngkaPertama(AngkaPertama + val)
} else if (!AngkaKedua) {
  setAngkaKedua(val.toString())
} else {
  setAngkaKedua(AngkaKedua + val)
}
 }

 
const handleOperator = (val) => {
  if(result) {
    setAngkaPertama(result)
    setOperator(val)
  }
  if(AngkaPertama) {
    setOperator(val)
  }
}


const handleClear = () => {
  setAngkaPertama(null)
  setAngkaKedua(null)
  setOperator(null)
  setDisplayNumber(0)
}

const handleDelete = () => {
setDisplayNumber = DisplayNumber.substr(0,DisplayNumber.length-1)
  

  }

const handleResult = () => {
  let tempResult
  switch (operator) {
    case '+':
      tempResult = parseFloat(AngkaPertama) + parseFloat(AngkaKedua)
      setResult(tempResult.toString())
      handleClear()
      break;

        case '-':
          tempResult = parseFloat(AngkaPertama) - parseFloat(AngkaKedua)
          setResult(tempResult.toString())
          handleClear()
          break;


          case 'x':
          tempResult = parseFloat(AngkaPertama) * parseFloat(AngkaKedua)
          setResult(tempResult.toString())
          handleClear()
          break;

          case '/':
          tempResult = parseFloat(AngkaPertama) / parseFloat(AngkaKedua)
          setResult(tempResult.toString())
          handleClear()
          break;

    default:
      break;
  }
}


console.log(`${AngkaPertama} ${operator} ${AngkaKedua} = ${result}`)
  return (
    
    <div className='  bg-slate-900 rounded-md shadow-md py-14 px-5 flex justify-around text-center my-20 box-border ml-96 mr-96'>
        <div className='w-[320px] h-[445px] py-1 px-4  rounded-md '>
            <div className='flex h-[100px] items-center justify-end text-white'>
            <span className='text-3xl pr-5'> {DisplayNumber ? DisplayNumber : 0}</span>
    </div>
        <div className='flex flex-row flex-wrap h-[340px] gap-2'>

        <Button clickAction={handleClear} val={'AC'} grow={true}/>
        <Button clickAction={handleDelete} val={'DEL'} />
        <Button clickAction={handleOperator} val={'/'} operator={true}/>



          <Button clickAction={handleNumber} val={7} />
          <Button clickAction={handleNumber} val={8} />
          <Button clickAction={handleNumber} val={9} />
          <Button clickAction={handleOperator} val={'+'} operator={true}/>


          <Button clickAction={handleNumber} val={6} />
          <Button clickAction={handleNumber} val={5} />
          <Button clickAction={handleNumber} val={4} />
          <Button clickAction={handleOperator} val={'-'} operator={true}/>
          


          <Button clickAction={handleNumber} val={1} />
          <Button clickAction={handleNumber} val={2} />
          <Button clickAction={handleNumber} val={3} />
          <Button clickAction={handleOperator} val={'x'} operator={true}/>
          

          <Button clickAction={handleNumber} val={0} />
          <Button clickAction={handleNumber} val={'.'} />
          <Button clickAction={handleResult} val={'='} operator={true} grow={true}/>
          
          
        </div>
    </div>
    </div>
    
  )
}

export default Calc