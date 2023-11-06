
const MyjobsCard = ({ job }) => {
    const {  applicant_name, applicant_email, deadline, salary, description, job_title, category } = job;
    return (
        <div className="bg-white hover:bg-green-50 hover:shadow-2xl rounded-2xl hover:border-2 hover:border-green-500">
            {/* <img className="h-32 w-40" src={image} alt="" /> */}
            <h1 className="text-3xl my-2 font-bold ml-5">{job_title}</h1>
            <div className=" ml-5 items-center mb-5">
                <p className="text-xl"><span className='text-2xl font-semibold'>Applicant Name: </span>{applicant_name}</p>
                <p className="text-xl"><span className='text-2xl font-semibold'>Applicant Email: </span>{applicant_email}</p>
                <p className="text-xl"><span className='text-2xl font-semibold'>Application Deadline: </span>{deadline}</p>
                <p className="text-xl"><span className='text-2xl font-semibold'>Salary: </span>{salary}</p>
                <p className="text-xl"><span className='text-2xl font-semibold'>Description: </span>{description}</p>
                <p className="text-xl"><span className='text-2xl font-semibold'>Job Category: </span>{category}</p>
            </div>
        </div>
    );
};

export default MyjobsCard;