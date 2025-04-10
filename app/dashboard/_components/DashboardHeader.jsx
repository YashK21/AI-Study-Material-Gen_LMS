import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='flex shadow-md p-5 justify-end'>
      <UserButton/>
    </div>
  )
}

export default DashboardHeader