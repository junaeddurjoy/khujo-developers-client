import { useEffect, useState } from 'react';
import AlljobsCard from '../Components/AlljobsCard';
const Alljobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    const [search, setSearch] = useState();
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searched = form.search.value;
        setSearch(searched);
    };

    return (
        <div className='mx-20'>
            <form className="form-control bg-purple-200" onSubmit={handleSearch}>
                <label className="label justify-center">
                    <span className="label-text text-5xl font-bold">Discover your dream job with <span className='text-green-400'>KHUJO!</span> </span>
                </label>
                <label className="input-group justify-center items-center py-3">
                    <input type="text" name='search' placeholder="Ex: Web Developer" className="input input-bordered" />
                    <button className='p-4 bg-green-400 font-bold hover:bg-green-300 hover:text-white' type="submit">Search</button>
                </label>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    jobs.map(job => <AlljobsCard
                        key={job.job_id}
                        job={job}
                        search={search}
                    ></AlljobsCard>)
                }
            </div>
        </div>
    );
};

export default Alljobs;