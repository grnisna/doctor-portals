import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-primary text-4xl'>Welcome to DashBoard</h1>
                <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>Sidebar Item 1</Link></li>
                    <li><Link to={'/dashboard/review'}>Sidebar Item 2</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;