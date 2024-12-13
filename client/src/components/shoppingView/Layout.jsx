import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        {/* common header components  */}
        <Header />
        <main className='flex fle-col w-full'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout