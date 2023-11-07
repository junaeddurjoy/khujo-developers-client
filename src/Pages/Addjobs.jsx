import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";

const Addjobs = () => {
    const { user } = useContext(Authcontext);
    const handleAddjobs = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.recruiter.value;
        const recruiter_mail = form.recruiter_mail.value;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const posting_date = form.posting_date.value;
        const deadline = form.deadline.value;
        const applicants = 0;

        const newJob = { name, recruiter_mail, title, image, category, salary, description, posting_date, applicants, deadline };
        console.log(newJob);
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // Swal.fire({
                    //     title: 'Success!',
                    //     text: 'Product Added Successfully',
                    //     icon: 'success',
                    //     confirmButtonText: 'Cool'
                    //   })
                    console.log('added');
                }
            })
    }
    return (
        <div className="mx-10 md:mx-14 lg:mx-20">
            <h3 className="text-3xl text-center font-bold py-4">Add a new job here at <span className="text-4xl text-green-600">KHUJO!</span></h3>
            <div className="bg-green-50 border-2 border-green-400">
                <form onSubmit={handleAddjobs}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5">
                        {/* 1 */}
                        <div className="form-control  items-center">
                            <label className="label ">
                                <span className="label-text font-bold text-xl">Recruiter</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Name</span>
                                <input type="text" defaultValue={user?.displayName} name="recruiter" placeholder="recruiter name" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 2 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Recruiter Email</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Email</span>
                                <input type="email" defaultValue={user?.email} name="recruiter_mail" placeholder="recruiter email" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 3 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Job Title</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Job</span>
                                <input type="text" name="title" placeholder="job title" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 3 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Image URL</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Job</span>
                                <input type="text" name="image" placeholder="image" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 4 */}
                        <div className="form-control items-center">
                            <label className="label ">
                                <span className="label-text font-bold text-xl">Job Category</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Category</span>
                                <select name="category" className="input input-bordered">
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
                                <input type="text" name="salary" placeholder="salary" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 6 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Job Description</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Description</span>
                                <input type="text" name="description" placeholder="description" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 7 */}
                        <div className="form-control  items-center">
                            <label className="label ">
                                <span className="label-text font-bold text-xl">Posting Date</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Date</span>
                                <input type="date" name="posting_date" placeholder="date" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 8 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Application Deadline</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Deadline</span>
                                <input type="date" name="deadline" placeholder="deadline" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="p-5 text-center">
                        <button type="submit" className="btn btn-wide justify-center bg-green-400 hover:bg-green-300 font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addjobs;