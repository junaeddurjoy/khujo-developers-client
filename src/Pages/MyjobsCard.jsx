import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const MyjobsCard = ({ job, handleDelete }) => {
    const { user } = useContext(Authcontext);
    // const { _id, recruiter_email, applicant_name, applicant_email, deadline, salary, description, job_title, category } = job;
    const { _id, title, recruiter_mail, name, category } = job;
    return (
        <div>
            {/* <img className="h-32 w-40" src={image} alt="" /> */}
            {
                user?.email == recruiter_mail &&
                // <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                //     <h1 className="text-3xl my-2 font-bold ml-5">{job_title}</h1>
                //     <div className="items-center mb-5">
                //         <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Applicant Name: </span>{applicant_name}</p>
                //         <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Applicant Email: </span>{applicant_email}</p>
                //         <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Application Deadline: </span>{deadline}</p>
                //         <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Salary: </span>{salary}</p>
                //         <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Description: </span>{description}</p>
                //         <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Job Category: </span>{category}</p>
                //         <button onClick={() => handleDelete(_id)} className="btn btn-error w-3/4 ml-12 mt-4 bg-red-500 hover:bg-red-300">Delete</button>
                //         <Link to={`/updatejobs/${_id}`}>
                //             <button className="btn btn-error w-3/4 ml-12 mt-4 bg-yellow-300 hover:bg-yellow-100">Update</button>
                //         </Link>
                //     </div>

                <div>
                    <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                        {/* <img className="h-32 w-40" src={image} alt="" /> */}
                        <h2 className="text-xl -mt-10 ml-5">{category}</h2>
                        <h1 className="text-3xl my-2 font-bold ml-5">{title}</h1>
                        <div className="flex ml-5 items-center">
                            <CiLocationOn className="text-2xl text-green-700 font-extrabold"></CiLocationOn>
                            <p className="text-2xl">{name}</p>
                        </div>
                        <div className="ml-5 mb-7 mt-3">
                            <span className="font-semibold text-3xl">$5000/</span>month
                            <Link to={`jobdetails/${_id}`}><button className="btn btn-outline btn-success ml-16">Details</button></Link>
                        </div>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error w-3/4 ml-12 mt-4 bg-red-500 hover:bg-red-300">Delete</button>
                        <Link to={`/updatejobs/${_id}`}>
                            <button className="btn btn-error w-3/4 ml-12 mt-4 bg-yellow-300 hover:bg-yellow-100">Update</button>
                        </Link>
                    </div>
                </div>
            }
        </div >


    );
};

export default MyjobsCard;