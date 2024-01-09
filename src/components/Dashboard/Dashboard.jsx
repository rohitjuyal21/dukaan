import React from 'react'
import Header from './Header'
import Overview from './Overview'
import Transactions from '../Transactions/TransactionsSection'

const Dashboard = () => {
  return (
    <div className='w-full bg-[#FAFAFA]'>
        <Header />
        <div className='p-8'>
        <Overview />
        <Transactions />
        </div>
    </div>
  )
}

export default Dashboard