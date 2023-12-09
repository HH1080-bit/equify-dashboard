import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { GoPeople } from "react-icons/go";



const Sidebar = () => {
    return (
        <div className='col-span-3 row-span-12 bg-sidebarColor text-white'>
            <div className='flex text-2xl items-center justify-between p-6'>
                <h1>Equify</h1>
                <CiMenuBurger className='cursor-pointer'/>
            </div>
            <div>
                <ul className='flex flex-col text-lg'>
                    <li className='flex items-center ml-8 mb-3 cursor-pointer'>
                    <FaTasks className='mr-3'/>
                        Tasks
                    </li>
                    <li className='flex items-center ml-8 mb-3 cursor-pointer'>
                    <GoPeople className='mr-3'/>
                        Employees
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
