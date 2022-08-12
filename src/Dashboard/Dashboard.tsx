import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;