import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(Authcontext);
    return (
        <div className="justify-center">
            <Helmet>
                <title>Khujo | My Profile</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={user.photoURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {user.displayName}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;