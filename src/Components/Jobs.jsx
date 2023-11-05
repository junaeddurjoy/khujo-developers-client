import { useEffect, useState } from 'react';
import JobCard from './JobCard';
const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    jobs.map(job => <JobCard 
                        key={job.job_id}
                        job = {job}
                    ></JobCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;