import { useEffect, useState } from "react";
import MyjobsCard from "./MyjobsCard";

const Myjobs = () => {
    const [jobs, setJobs] = useState([]);
    const handleDelete = id => {
        const proceed = confirm ('Kardu??');
        if(proceed){
            fetch(`http://localhost:5000/applications/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('delete success');
                    const remaining = jobs.filter(application => application._id !== id );
                    setJobs(remaining);
                }
            })
        }
    }
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className="mx-20">
            <h3 className="text-center text-4xl bg-purple-100 p-5 font-semibold mb-8">See your jobs from <span className="text-4xl font-bold text-green-500">KHUJO</span></h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    jobs.map(job => <MyjobsCard
                        key={job.job_id}
                        job = {job}
                        handleDelete = {handleDelete}
                    ></MyjobsCard>)
                }
            </div>
        </div>
    );
};

export default Myjobs;