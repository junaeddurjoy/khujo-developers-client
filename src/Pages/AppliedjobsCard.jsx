import { useContext} from "react";
import { Authcontext } from "../providers/Authprovider";

const AppliedjobsCard = ({ job }) => {
    const { user } = useContext(Authcontext);
    const {  applicant_name, applicant_email, deadline, salary, description, job_title, category } = job;

    return (
        <div>
            {/* <img className="h-32 w-40" src={image} alt="" /> */}
            {
                user.email == applicant_email &&
                <div className="bg-white hover:bg-green-50 mt-10 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
                    <h1 className="text-3xl my-2 font-bold ml-5">{job_title}</h1>
                    <div className="items-center mb-5">
                        <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Applicant Name: </span>{applicant_name}</p>
                        <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Applicant Email: </span>{applicant_email}</p>
                        <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Application Deadline: </span>{deadline}</p>
                        <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Salary: </span>{salary}</p>
                        <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Description: </span>{description}</p>
                        <p className="ml-5 text-xl"><span className='text-2xl font-semibold'>Job Category: </span>{category}</p>
                    </div>
                    

                </div>
            }
        </div>


    );
};

export default AppliedjobsCard;