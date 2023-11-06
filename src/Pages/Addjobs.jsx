import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";

const Addjobs = () => {
    const { user } = useContext(Authcontext);
    return (
        <div className="mx-10 md:mx-14 lg:mx-20">
            <h3 className="text-3xl text-center font-bold py-4">Add a new job here at <span className="text-4xl text-green-600">KHUJO!</span></h3>
            <div className="bg-green-50 border-2 border-green-400">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5">
                        {/* 1 */}
                        <div className="form-control  items-center">
                            <label className="label ">
                                <span className="label-text font-bold text-xl">Recruiter</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Name</span>
                                <input type="text" defaultValue={user.displayName} placeholder="recruiter name" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 2 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Recruiter Email</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Email</span>
                                <input type="email" defaultValue={user.email} placeholder="recruiter email" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 3 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Job Title</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Job</span>
                                <input type="text" placeholder="job title" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 4 */}
                        <div className="form-control items-center">
                            <label className="label ">
                                <span className="label-text font-bold text-xl">Job Category</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Category</span>
                                <select className="input input-bordered">
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
                                <input type="text" placeholder="salary" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 6 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Job Description</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Description</span>
                                <input type="text" placeholder="description" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 7 */}
                        <div className="form-control  items-center">
                            <label className="label ">
                                <span className="label-text font-bold text-xl">Posting Date</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Date</span>
                                <input type="date" placeholder="date" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 8 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Application Deadline</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Deadline</span>
                                <input type="date" placeholder="deadline" className="input input-bordered" />
                            </label>
                        </div>
                        {/* 9 */}
                        <div className="form-control  items-center">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Total Applicants</span>
                            </label>
                            <label className="input-group justify-center">
                                <span>Applicants</span>
                                <input type="number" placeholder="zero" className="input input-bordered" />
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