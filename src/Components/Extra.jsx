import { AiOutlineSafetyCertificate, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineQuickreply } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
const Extra = () => {
    return (
        <div>
            {/* extra section 1: companies worked with us */}
            <div className='text-center my-5 py-5'>
                <h1 className="text-5xl font-bold">More Than<span className="text-green-600"> 100+ </span>Companies Trusted Us</h1>
                <div className=' mx-10 md:mx-20 lg:mx-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-6'>
                    <img className='h-40 w-60' src="https://i.ibb.co/7bCkft4/png-clipart-googleplex-google-logo-google-search-oliver-atom-text-logo.png" alt="" />
                    <img className='h-16 w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" />
                    <img className='h-20 w-60' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
                    <img className='h-40 w-64' src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png" alt="" />
                    <img className='h-36 w-72' src="https://www.cyberlinkasp.com/wp-content/uploads/2017/07/Microsoft-Logo-PNG.png" alt="" />
                    <img className='h-36 w-72' src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" alt="" />
                </div>
            </div>
            {/* extra section 2: why choose us */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://www.recablog.com/wp-content/uploads/2021/09/web-development.png" className="max-w-sm md:max-w-xl lg:max-w-3xl rounded-lg shadow-2xl" />
                        <div>
                            <p className="text-2xl text-gray-600 pb-3">WHY CHOOSE US</p>
                            <h1 className="text-5xl font-bold"><span className="text-green-600">Khujo</span> Website Only For Your Dream Jobs</h1>
                            <p className="text-xl text-gray-500 py-6">Phosfluorescently develop empowered communit rather than front-end networks. Competently formula revolut infrastructures with high standards.</p>
                            <div>
                                <div className='flex items-center gap-2 '>
                                    <div className='text-2xl font-semibold rounded-full bg-green-200 hover:bg-green-500 text-green-800 hover:text-white w-min p-1'><AiOutlineSafetyCertificate></AiOutlineSafetyCertificate></div>
                                    <div className='text-xl font-semibold'>Payment Gateway Secure</div>
                                </div>
                                <div className='flex items-center gap-2 my-3'>
                                    <div className='text-2xl font-semibold rounded-full bg-green-200 hover:bg-green-500 text-green-800 hover:text-white w-min p-1'><MdOutlineQuickreply></MdOutlineQuickreply></div>
                                    <div className='text-xl font-semibold'>Quick Delivery & Fast Load</div>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='text-2xl font-semibold rounded-full bg-green-200 hover:bg-green-500 text-green-800 hover:text-white w-min p-1'><BiTime></BiTime></div>
                                    <div className='text-xl font-semibold'>Work Per Hour & Screenshots</div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-2xl font-semibold rounded-full bg-green-200 hover:bg-green-500 text-green-800 hover:text-white w-min p-1'><AiOutlineHome></AiOutlineHome></div>
                                    <div className='text-xl font-semibold'>Work From Home & Remote Work</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;