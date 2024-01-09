import React from 'react'

const Overview = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
            <h2 className='text-[20px] font-medium text-[#1A181E]'>Overview</h2>
            <div className='bg-white flex items-center gap-3 px-3.5 py-1.5 border border-[#D9D9D9] rounded-[4px] cursor-pointer'>
                <span className='text-[#4D4D4D]'>Last Month</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"/>
</svg>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-5 pt-6 pb-8'>
            <div className='p-5 w-full space-y-4 bg-white shadow-[0_2px_6px_rgba(26,24,30,0.04)]  rounded-md'>
                <h4 className='text-[#4D4D4D]'>Online orders</h4>
                <h1 className='text-2xl font-medium text-[#1A181E]'>231</h1>
            </div>
            <div className='p-5 w-full space-y-4 bg-white shadow-[0_2px_6px_rgba(26,24,30,0.04)] rounded-md'>
                <h4 className='text-[#4D4D4D]'>Amount received</h4>
                <h1 className='text-2xl font-medium text-[#1A181E]'>₹23,92,312.19</h1>
            </div>

        </div>
    </div>
  )
}

export default Overview