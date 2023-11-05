import Banner from "../Components/Banner";
import Extra from "../Components/Extra";
import { CiLocationOn } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div className="bg-green-50">
                <Tabs className={'text-bold'}>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>On Site Jobs</Tab>
                        <Tab>Remote Jobs</Tab>
                        <Tab>Hybrid Jobs</Tab>
                        <Tab>Part Time Jobs</Tab>
                    </TabList>

                    <div className="mx-10 pt-5 pb-10">
                        <TabPanel>
                            <div className="grid grid-cols-4 gap-10">
                                <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                                    <img className="h-32 w-40" src="https://i.ibb.co/7bCkft4/png-clipart-googleplex-google-logo-google-search-oliver-atom-text-logo.png" alt="" />
                                    <h2 className="text-xl -mt-10 ml-5">Remote</h2>
                                    <h1 className="text-3xl my-2 font-bold ml-5">Sr. UX/UI Designer</h1>
                                    <div className="flex ml-5 items-center">
                                        <CiLocationOn className="text-2xl text-green-700 font-extrabold"></CiLocationOn>
                                        <p className="text-2xl">United States</p>
                                        <BiTimeFive className="ml-3 text-2xl text-green-700 font-extrabold"></BiTimeFive>
                                        <p className="text-2xl">Full Time</p>
                                    </div>
                                    <div className="ml-5 mb-7 mt-3">
                                        <span className="font-semibold text-3xl">$5000/</span>month
                                        <button className="btn btn-outline btn-success ml-16">Details</button>
                                    </div>
                                </div>
                                <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                                    <img className="h-32 w-40" src="https://i.ibb.co/7bCkft4/png-clipart-googleplex-google-logo-google-search-oliver-atom-text-logo.png" alt="" />
                                    <h2 className="text-xl -mt-10 ml-5">Remote</h2>
                                    <h1 className="text-3xl my-2 font-bold ml-5">Sr. UX/UI Designer</h1>
                                    <div className="flex ml-5 items-center">
                                        <CiLocationOn className="text-2xl text-green-700 font-extrabold"></CiLocationOn>
                                        <p className="text-2xl">United States</p>
                                        <BiTimeFive className="ml-3 text-2xl text-green-700 font-extrabold"></BiTimeFive>
                                        <p className="text-2xl">Full Time</p>
                                    </div>
                                    <div className="ml-5 mb-7 mt-3">
                                        <span className="font-semibold text-3xl">$5000/</span>month
                                        <button className="btn btn-outline btn-success ml-16">Details</button>
                                    </div>
                                </div>
                                <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                                    <img className="h-32 w-40" src="https://i.ibb.co/7bCkft4/png-clipart-googleplex-google-logo-google-search-oliver-atom-text-logo.png" alt="" />
                                    <h2 className="text-xl -mt-10 ml-5">Remote</h2>
                                    <h1 className="text-3xl my-2 font-bold ml-5">Sr. UX/UI Designer</h1>
                                    <div className="flex ml-5 items-center">
                                        <CiLocationOn className="text-2xl text-green-700 font-extrabold"></CiLocationOn>
                                        <p className="text-2xl">United States</p>
                                        <BiTimeFive className="ml-3 text-2xl text-green-700 font-extrabold"></BiTimeFive>
                                        <p className="text-2xl">Full Time</p>
                                    </div>
                                    <div className="ml-5 mb-7 mt-3">
                                        <span className="font-semibold text-3xl">$5000/</span>month
                                        <button className="btn btn-outline btn-success ml-16">Details</button>
                                    </div>
                                </div>
                                <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                                    <img className="h-32 w-40" src="https://i.ibb.co/7bCkft4/png-clipart-googleplex-google-logo-google-search-oliver-atom-text-logo.png" alt="" />
                                    <h2 className="text-xl -mt-10 ml-5">Remote</h2>
                                    <h1 className="text-3xl my-2 font-bold ml-5">Sr. UX/UI Designer</h1>
                                    <div className="flex ml-5 items-center">
                                        <CiLocationOn className="text-2xl text-green-700 font-extrabold"></CiLocationOn>
                                        <p className="text-2xl">United States</p>
                                        <BiTimeFive className="ml-3 text-2xl text-green-700 font-extrabold"></BiTimeFive>
                                        <p className="text-2xl">Full Time</p>
                                    </div>
                                    <div className="ml-5 mb-7 mt-3">
                                        <span className="font-semibold text-3xl">$5000/</span>month
                                        <button className="btn btn-outline btn-success ml-16">Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 5</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
            <Extra></Extra>

        </div>
    );
};

export default Home;