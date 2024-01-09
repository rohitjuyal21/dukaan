import React from 'react'
import {data} from './data.js'

const Transactions = () => {
    console.log(data)
  return (
    <div className='px-3'>
        {data.map(item => (
          <div className='py-3.5 grid grid-cols-4 border-b border-[#D9D9D9]'>
            <h4 className='text-sm text-[#146EB4]'>{item.orderID}</h4>
            <h4 className='text-sm text-[#1A181E]'>{item.orderDate}</h4>
            <h4 className='text-sm text-[#1A181E] justify-self-end'>{item.orderAmount}</h4>
            <h4 className='text-sm text-[#1A181E] justify-self-end'>{item.transactionFees}</h4>
          </div>  
        ))}
    </div>
  )
}

export default Transactions