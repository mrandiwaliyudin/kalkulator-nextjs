import React from 'react'

const Button = ({val, clickAction, grow = false, operator = false}) => {
  return (
    <button 
    onClick={() => clickAction(val)}
    className={`text-white text-2xl h-1/5 cursor-pointer  rounded-lg border border-gray-900 hover:bg-gray-700  
    ${grow ? `flex-[2_0_41%]` : `flex-[2_0_21%] `}
    ${grow && val === 0 ? `flex-[3_0_63%]` : `flex-[1_0_21%] `}
    ${operator ? `bg-orange-400` : ` bg-blue-900 `}
    
    
    `} 
   
    >
  
        {val}
    </button>
  );
    };

export default Button