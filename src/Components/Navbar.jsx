const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-around">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>All Jobs</a></li>
                            <li><a>Applied Jobs</a></li>
                            <li><a>Add Jobs</a></li>
                            <li><a>My Jobs</a></li>
                            <li><a>Blogs</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center  lg:pl-5 ">
                        <img className="h-20 w-20 " src="https://i.ibb.co/KwR5XVt/dev-icon-6.png" alt="" />
                        <a className="btn btn-ghost normal-case text-4xl font-semibold text-green-600">Khujo</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex gap-16 pr-10">
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Home</div>
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">All Jobs</div>
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Applied Jobs</div>
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Add Jobs</div>
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">My Jobs</div>
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">Blogs</div>
                    <div className="text-gray-800 hover:text-green-500 text-xl font-semibold ">User Name</div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/kGbbryP/account-avatar-profile-user-13-svgrepo-com.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-lg font-semibold">Profile</li>
                            <li className="text-lg font-semibold">Settings</li>
                            <li className="text-lg font-semibold">Logout</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;