import { useEffect, useState } from "react";
import MyjobsCard from "./MyjobsCard";
import Swal from 'sweetalert2'
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async";

const Myjobs = () => {

    const [jobs, setJobs] = useState([]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://khujo-developers-server-nc47xw7ew-junaeds-projects.vercel.app//jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = jobs.filter(job => job._id !== id);
                                setJobs(remaining);
                            }
                        }
                    })
            }
        })
    }
    useEffect(() => {
        fetch('https://khujo-developers-server-nc47xw7ew-junaeds-projects.vercel.app//jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className="mx-20">
            <Helmet>
                <title>Khujo | My Jobs</title>
            </Helmet>
            <h3 className="text-center text-4xl bg-purple-100 p-5 font-semibold mb-8">See your jobs from <span className="text-4xl font-bold text-green-500">KHUJO</span></h3>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    jobs.map(job => <MyjobsCard
                        key={job.job_id}
                        job={job}
                        handleDelete={handleDelete}
                    ></MyjobsCard>)
                }
            </div> */}
            <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            />
            <table className="mt-10 text-center mx-auto border-separate border-spacing-2">
                <tr className="">
                    <td className="text-xl font-bold bg-green-400 p-3">Title</td>
                    <td className="text-xl font-bold bg-green-400 p-3">Deadline</td>
                    <td className="text-xl font-bold bg-green-400 p-3">Salary</td>
                    <td className="text-xl font-bold bg-green-400 p-3">Category</td>
                    <td className="text-xl font-bold bg-green-400 p-3">Action</td>
                </tr>
                {
                    jobs.map(job => <MyjobsCard
                        key={job.job_id}
                        job={job}
                        handleDelete={handleDelete}
                    ></MyjobsCard>)
                }
            </table>
        </div>
    );
};

export default Myjobs;