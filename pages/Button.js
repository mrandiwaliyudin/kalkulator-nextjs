import React from 'react'

const Button = ({val, clickAction, grow = false, operator = false}) => {
  return (
    <button 
    onClick={() => clickAction(val)}
    className={`text-white text-2xl h-1/5 cursor-pointer bg-slate-800 rounded-lg border border-gray-900 hover:bg-gray-700  
    ${grow ? `flex-row basis-1/2` : `flex-row basis-16 `}
    ${grow && val === 0 ? `flex-[3_0_63%]` : `flex-[1_0_21%] `}
    
    
    
    `} 
   
    >
  
        {val}
    </button>
  );
    };

export default Button