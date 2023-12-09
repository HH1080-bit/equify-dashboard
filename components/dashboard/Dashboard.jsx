import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12 grid-rows-12'>
            <Sidebar/>
        </div>
    );
}

export default Dashboard;
