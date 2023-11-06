import { useEffect, useState } from "react";
import MyjobsCard from "./MyjobsCard";

const Myjobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/applications')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className="mx-20">
            <h3 className="text-center text-4xl bg-purple-100 p-5 font-semibold">See your applicants from <span className="text-4xl font-bold text-green-500">KHUJO</span></h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    jobs.map(job => <MyjobsCard
                        key={job.job_id}
                        job = {job}
                    ></MyjobsCard>)
                }
            </div>
        </div>
    );
};

export default Myjobs;