import { useLoaderData } from "react-router-dom";

const Updatejobs = () => {
    const job = useLoaderData();
    const {_id, recruiter_email, recruiter_name, applicant_email, applicant_name, job_title, category, salary, description, post_date, deadline, applicants } = job;
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const recruiter_name = form.recruiter_name.value;
        const recruiter_email = form.recruiter_email.value;
        const applicant_email = form.applicant_email.value;
        const applicant_name = form.applicant_name.value;
        const job_title = form.job_title.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const post_date = form.post_date.value;
        const deadline = form.deadline.value;
        const applicants = form.applicants.value;
        const updatedApply = { recruiter_email, recruiter_name, applicant_email, applicant_name, job_title, category, salary, description, post_date, deadline, applicants };
        fetch(`http://localhost:5000/applications/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedApply)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Swal.fire({
                    //     title: 'Success!',
                    //     text: 'Product Updated Successfully',
                    //     icon: 'success',
                    //     confirmButtonText: 'Cool'
                    // })
                    console.log('updated');
                }
            })
    }
    return (
        <div>
            <div className="mx-10 md:mx-14 lg:mx-20">
                <h3 className="text-3xl text-center font-bold py-4">Start your first job at <span className="text-4xl text-green-600">KHUJO!</span></h3>
                <div className="bg-green-50 border-2 border-green-400">
                    <form onSubmit={handleUpdateProduct}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5">
                            {/* 1 */}
                            <div className="form-control  items-center">
                                <label className="label ">
                                    <span className="label-text font-bold text-xl">Recruiter</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Name</span>
                                    <input type="text" defaultValue={recruiter_name} name="recruiter_name" placeholder="recruiter name" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 2 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Recruiter Email</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Email</span>
                                    <input type="email" defaultValue={recruiter_email} name="recruiter_email" placeholder="recruiter email" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 1 */}
                            <div className="form-control  items-center">
                                <label className="label ">
                                    <span className="label-text font-bold text-xl">Applicant</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Name</span>
                                    <input type="text" defaultValue={applicant_name} name="applicant_name" placeholder="applicant name" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 2 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Applicant Email</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Email</span>
                                    <input type="email" defaultValue={applicant_email} name="applicant_email" placeholder="applicant email" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 3 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Job Title</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Job</span>
                                    <input type="text" defaultValue={job_title} name="job_title" placeholder="job title" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 4 */}
                            <div className="form-control items-center">
                                <label className="label ">
                                    <span className="label-text font-bold text-xl">Job Category</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Category</span>
                                    <select defaultValue={category} name="category" className="input input-bordered">
                                        <option name="onsite" id="">On Site</option>
                                        <option name="remote" id="">Remote</option>
                                        <option name="parttime" id="">Part Time</option>
                                        <option name="hybrid" id="">Hybrid</option>
                                    </select>
                                </label>
                            </div>
                            {/* 5 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Job Salary</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Salary</span>
                                    <input type="text" defaultValue={salary} name="salary" placeholder="salary" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 6 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Job Description</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Description</span>
                                    <input type="text" defaultValue={description} name="description" placeholder="description" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 7 */}
                            <div className="form-control  items-center">
                                <label className="label ">
                                    <span className="label-text font-bold text-xl">Posting Date</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Date</span>
                                    <input type="date" defaultValue={post_date} name="post_date" placeholder="date" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 8 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Application Deadline</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Deadline</span>
                                    <input type="date" defaultValue={deadline} name="deadline" placeholder="deadline" className="input input-bordered" />
                                </label>
                            </div>
                            {/* 9 */}
                            <div className="form-control  items-center">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Total Applicants</span>
                                </label>
                                <label className="input-group justify-center">
                                    <span>Applicants</span>
                                    <input type="number" defaultValue={applicants} name="applicants" placeholder="zero" className="disable input input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className="p-5 text-center">
                            <button type="submit" className="btn btn-wide justify-center bg-green-400 hover:bg-green-300 font-bold">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updatejobs;