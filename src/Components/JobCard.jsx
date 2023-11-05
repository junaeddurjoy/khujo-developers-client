import { CiLocationOn } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
const JobCard = ({ job }) => {
    const { title, name, category,image } = job;
    return (
        <div>
            <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                <img className="h-32 w-40" src={image} alt="" />
                <h2 className="text-xl -mt-10 ml-5">{category}</h2>
                <h1 className="text-3xl my-2 font-bold ml-5">{title}</h1>
                <div className="flex ml-5 items-center">
                    <CiLocationOn className="text-2xl text-green-700 font-extrabold"></CiLocationOn>
                    <p className="text-2xl">{name}</p>
                    <BiTimeFive className="ml-3 text-2xl text-green-700 font-extrabold"></BiTimeFive>
                    <p className="text-2xl">Full Time</p>
                </div>
                <div className="ml-5 mb-7 mt-3">
                    <span className="font-semibold text-3xl">$5000/</span>month
                    <button className="btn btn-outline btn-success ml-16">Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;