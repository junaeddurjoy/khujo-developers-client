import { AiOutlineSafetyCertificate, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineQuickreply } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
const Extras = () => {
    return (
        <div>
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

export default Extras;