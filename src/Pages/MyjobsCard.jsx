import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";
import { Link } from "react-router-dom";

const MyjobsCard = ({ job, handleDelete }) => {
    const { user } = useContext(Authcontext);
    const { _id, title, recruiter_mail, name, category, salary } = job;
    return (
        <tr>

            {
                user?.email == recruiter_mail &&
                <>
                    <td className="bg-green-300 p-3">{name}</td>
                    <td className="bg-green-300 p-3">{title}</td>
                    <td className="bg-green-300 p-3">{salary}</td>
                    <td className="bg-green-300 p-3">{category}</td>
                    <td className="bg-green-300 p-3">
                        <button onClick={() => handleDelete(_id)} className="bg-red-400 p-2 rounded-lg text-white" >Delete</button>
                        <Link to={`/updatejobs/${_id}`}>
                            <button className="bg-purple-400 ml-2 p-2 rounded-lg text-white" >Update</button>
                        </Link>
                    </td>
                </>
            }
        </tr>


    );
};

export default MyjobsCard;