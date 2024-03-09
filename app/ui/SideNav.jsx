import React from 'react'
import Image from 'next/image'
import {LayoutDashboard,BarChart2, Bell, Folders, MessageCircleQuestion, Settings, LogOut } from 'lucide-react'
import Logo from '../assets/logo.png'
export default function SideNav() {
  return (
    <aside className="fixed flex h-screen w-[13vw] flex-col overflow-y-auto border-r bg-white px-2 py-8">
      <a href="#" className='m-auto'>
       <Image
       src={Logo}
       alt='logo'
       width={60}
       height={60}
       />
      </a>
      <div className="m-auto mt-16 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
          
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
              <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium ml-5">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
             <BarChart2 className="h-5 w-5" aria-hidden="true"/>
              <span className="mx-2 text-sm font-medium ml-5">Analytics</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

              <span className="mx-2 text-sm font-medium ml-5">Communities</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
              <Bell className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium ml-5">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
              <Folders />
              <span className="mx-2 text-sm font-medium ml-5">Media</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
              <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium ml-5">Support</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
              <Settings className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium ml-5">Settings</span>
            </a>
            <a
              className="flex absolute bottom-2 transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-green-600 hover:text-white"
              href="#"
            >
              <LogOut className="h-5 w-5" aria-hidden="true" stroke="green"/>
              <span className="mx-2 text-sm font-medium ml-5 text-green-600 hover:text-white">Log-out</span>
            </a>
          </div>
          
        
        </nav>
      </div>
    </aside>
  )
}
