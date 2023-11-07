import { Link } from 'react-router-dom';
const AlljobsCard = ({ job, search = "" }) => {
    const { _id, title, name, category, image,salary } = job;
    return (
        <div className='mt-5'>
            {
                (search == title || search == "") &&
                <div className="bg-white  hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                    <img className="h-32 w-40" src={image} alt="" />
                    <h2 className="text-xl -mt-10 ml-5">{category}</h2>
                    <h1 className="text-3xl my-2 font-bold ml-5">{title}</h1>
                    <div className="flex ml-5 items-center">

                        <p className="text-2xl">{name}</p>
                    </div>
                    <div className="ml-5 mb-7 mt-3">
                        <span className="font-semibold text-3xl">{salary}/</span>month
                        <Link to={`/jobdetails/${_id}`}><button className="btn btn-outline btn-success ml-16">Details</button></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default AlljobsCard;