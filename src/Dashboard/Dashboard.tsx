import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;