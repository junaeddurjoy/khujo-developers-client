import { useEffect, useState } from "react";
import AppliedjobsCard from "./AppliedjobsCard";

const Appliedjobs = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState();
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searched = form.search.value;
        setSearch(searched);
    };
    
    // const handleDelete = id => {
    //     const proceed = confirm('Kardu??');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/applications/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('delete success');
    //                     const remaining = jobs.filter(application => application._id !== id);
    //                     setJobs(remaining);
    //                 }
    //             })
    //     }
    // }
    useEffect(() => {
        fetch('http://localhost:5000/applications')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className="mx-20 ">
           <form className="form-control bg-purple-200" onSubmit={handleSearch}>
                <label className="label justify-center">
                    <span className="label-text text-5xl font-bold">See your applied jobs from <span className='text-green-400'>KHUJO!</span> </span>
                </label>
                <label className="input-group justify-center items-center py-3">
                    <input type="text" name='search' placeholder="Ex: On Site" className="input input-bordered" />
                    <button className='p-4 bg-green-400 font-bold hover:bg-green-300 hover:text-white' type="submit">Search</button>
                </label>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    jobs.map(job => <AppliedjobsCard
                        key={job.job_id}
                        job={job}
                        // handleDelete={handleDelete}
                        search={search}
                    ></AppliedjobsCard>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;