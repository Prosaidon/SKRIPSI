import React, {useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/JATENGUPDATES.png';
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { BiNews } from 'react-icons/bi';
import {FiUser } from 'react-icons/fi';
import { FaPlus, FaUserFriends } from 'react-icons/fa';
import { TiPin } from "react-icons/ti";
import { IoLogOutOutline } from "react-icons/io5";
import storeContext from '../../context/storeContext'

const Sidebar = () => {


  const  navigate = useNavigate()
  const { pathname } = useLocation();

  const {store, dispatch} = useContext(storeContext)

  const logout = () =>{
    localStorage.removeItem('newsToken')
    dispatch({ type:'logout', payload: ''})
    navigate('/login')
  }

  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[70px] flex justify-center items-center">
        <Link to="/">
          <img className="w-[190px] h-[90px]" src={logo} alt="Jateng Updates" />
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        {
          store.userInfo?.role === 'admin'? <>
            <li>
              <Link to="/dashboard/admin" className={`px-3 ${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                <span className="icon">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/writer/add" className={`px-3 ${pathname === '/dashboard/writer/add' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                <span className="icon">
                  <AiOutlinePlus />
                </span>
                <span>Add Writer</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/writers" className={`px-3 ${pathname === '/dashboard/writers' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                <span className="icon">
                  <ImProfile />
                </span>
                <span>Writers</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/labelberita"
                className={`px-3 ${
                  pathname === "/dashboard/labelberita"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#404040f6]"
                } py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
              >
                <TiPin />
                <span>Label Berita</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/user" className={`px-3 ${pathname === '/dashboard/user' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                <span className="icon">
                <FaUserFriends />
                </span>
                <span>User</span>
              </Link>
            </li>
          
          </>:<>

            <li>
              <Link to="/dashboard/writer" className={`px-3 ${pathname === '/dashboard/writer' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                <span className="icon">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/news/create" className={`px-3 ${pathname === '/dashboard/news/create' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                <span className="icon">
                  <FaPlus />
                </span>
                <span>Add News</span>
              </Link>
            </li>
          </>
        }
        
        <li>
          <Link to="/dashboard/news" className={`px-3 ${pathname === '/dashboard/news' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="icon">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>
        
        <li>
          <Link to="/dashboard/profile" className={`px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} 
              py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="icon">
              <FiUser />
            </span>
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link onClick={logout} to="/login" className={`px-3 py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer`}>
            <span className="icon">
            <IoLogOutOutline />
            </span>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
