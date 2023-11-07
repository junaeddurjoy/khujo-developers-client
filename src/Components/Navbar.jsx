/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Authcontext } from "../providers/Authprovider";
import { useContext } from "react";
import { TbLogin2, TbLogin } from 'react-icons/tb'
const Navbar = () => {
    const { user, logout } = useContext(Authcontext);

    const handleSignOut = event => {
        logout()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100 justify-around">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={'/'}>
                                <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Home</div>
                            </Link>
                            <Link to={'/alljobs'}>
                                <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">All Jobs</div>
                            </Link>
                            {
                                user ?
                                    <>
                                        <Link to={'/appliedjobs'}>
                                            <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Applied Jobs</div>
                                        </Link>
                                        <Link to={'/addjobs'}>
                                            <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Add Jobs</div>
                                        </Link>
                                        <Link to={'/myjobs'}>
                                            <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">My Jobs</div>
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <div>

                                        </div>
                                    </>
                            }
                            <Link to={'/blogs'}>
                                <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Blogs</div>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex items-center  lg:pl-5 ">
                        <img className="h-20 w-20 " src="https://i.ibb.co/KwR5XVt/dev-icon-6.png" alt="" />
                        <a className="btn btn-ghost normal-case text-4xl font-semibold text-green-600">Khujo</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex gap-16 pr-10">
                    <Link to={'/'}>
                        <div className="text-gray-800 hover:text-white  hover:bg-green-400 p-2 rounded-lg text-xl hover:text-2xl font-semibold ">Home</div>
                    </Link>
                    <Link to={'/alljobs'}>
                        <div className="text-gray-800 hover:text-white  hover:bg-green-400 p-2 rounded-lg text-xl hover:text-2xl font-semibold ">All Jobs</div>
                    </Link>
                    {
                        user ?
                            <>
                                <Link to={'/appliedjobs'}>
                                    <div className="text-gray-800 hover:text-white  hover:bg-green-400 p-2 rounded-lg text-xl hover:text-2xl font-semibold ">Applied Jobs</div>
                                </Link>
                                <Link to={'/addjobs'}>
                                    <div className="text-gray-800 hover:text-white  hover:bg-green-400 p-2 rounded-lg text-xl hover:text-2xl font-semibold ">Add Jobs</div>
                                </Link>
                                <Link to={'/myjobs'}>
                                    <div className="text-gray-800 hover:text-white  hover:bg-green-400 p-2 rounded-lg text-xl  hover:text-2xl font-semibold ">My Jobs</div>
                                </Link>
                            </>
                            :
                            <></>
                    }
                    <Link to={'/blogs'}>
                        <div className="text-gray-800 hover:text-white hover:bg-green-400 p-2 rounded-lg text-xl hover:text-2xl font-semibold ">Blogs</div>
                    </Link>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                            user ?
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                                :
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/LN69WPV/image.png" />
                                </div>
                        }

                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52">
                        <Link to={'/profile'}><li className="text-lg font-semibold hover:text-2xl">Profile</li></Link>
                        {
                            user ?

                                <li className="text-lg font-semibold hover:text-2xl">{user.displayName}</li>

                                :

                                <li className="text-lg font-semibold hover:text-2xl">User Name</li>

                        }
                        {
                            user ?
                                <Link to={'/login'}>
                                    <div onClick={handleSignOut} className="text-lg flex items-center gap-1 font-semibold hover:text-2xl">Log Out<TbLogin></TbLogin></div>
                                </Link>
                                :
                                <Link to={'/login'}>
                                    <div className="text-lg flex items-center gap-1 font-semibold hover:text-2xl">Login<TbLogin2></TbLogin2></div>
                                </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;