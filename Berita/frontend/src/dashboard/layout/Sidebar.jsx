import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/JATENGUPDATES.png';
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { BiNews } from 'react-icons/bi';
import {FiUser } from 'react-icons/fi';
import './Sidebar.css'; // Pastikan file CSS terhubung
import { FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const { pathname } = useLocation();

  const userInfo ={
    role :"writer"
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/">
          <img className="sidebar-logo" src={logo} alt="Jateng Updates" />
        </Link>
      </div>
      <ul className="sidebar-menu">
        {
          userInfo.role === 'admin'? <>
            <li>
              <Link to="/dashboard/admin" className={`menu-item ${pathname === '/dashboard/admin' ? 'active' : ''}`}>
                <span className="icon">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/writer/add" className={`menu-item ${pathname === '/dashboard/writer/add' ? 'active' : ''}`}>
                <span className="icon">
                  <AiOutlinePlus />
                </span>
                <span>Add Writer</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/writers" className={`menu-item ${pathname === '/dashboard/writers' ? 'active' : ''}`}>
                <span className="icon">
                  <ImProfile />
                </span>
                <span>Writers</span>
              </Link>
            </li>
          
          </>:<>

            <li>
              <Link to="/dashboard/writer" className={`menu-item ${pathname === '/dashboard/writer' ? 'active' : ''}`}>
                <span className="icon">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/news/create" className={`menu-item ${pathname === '/dashboard/news/create' ? 'active' : ''}`}>
                <span className="icon">
                  <FaPlus />
                </span>
                <span>Add News</span>
              </Link>
            </li>
          </>
        }
        
        <li>
          <Link to="/dashboard/news" className={`menu-item ${pathname === '/dashboard/news' ? 'active' : ''}`}>
            <span className="icon">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>
        
        <li>
          <Link to="/dashboard/profile" className={`menu-item ${pathname === '/dashboard/profile' ? 'active' : ''}`}>
            <span className="icon">
              <FiUser />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
