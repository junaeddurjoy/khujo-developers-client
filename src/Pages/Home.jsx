import Banner from "../Components/Banner";
import Extra from "../Components/Extra";
import Marquee from "react-fast-marquee";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobs from "../Components/Jobs";
import Extras from "../Components/Extras";
import { Helmet } from "react-helmet-async";
const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Khujo | Home</title>
            </Helmet>
            <Banner></Banner>

            <Marquee>
                <Extra></Extra>
            </Marquee>
            <div className="mx-10 pt-5 pb-10">
                <h2 className="text-center text-4xl font-bold p-5 mb-10 bg-sky-200">Get Started...</h2>
                <Jobs></Jobs>
            </div>
            <div className="bg-green-50">

                {/* <Tabs className={'text-bold'}>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>On Site Jobs</Tab>
                        <Tab>Remote Jobs</Tab>
                        <Tab>Hybrid Jobs</Tab>
                        <Tab>Part Time Jobs</Tab>
                    </TabList>


                    <TabPanel>

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
                </Tabs> */}
                <Extras></Extras>
            </div>


        </div>
    );
};

export default Home;