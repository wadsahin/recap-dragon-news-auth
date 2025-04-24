import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {

    const {signupUser, userProfileUpdate} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name, photo, email, password})

        // Create a new user
        signupUser(email, password)
        .then(result => {
            console.log(result?.user);
            userProfileUpdate({displayName: name, photoURL: photo})
            .then(() =>{
                console.log("Profile updated successfully");
                navigate("/");
            })
            .catch(err =>{
                console.log(err.code);
            })
            // setUser(result.user);
        })
        .catch( err => {
            console.log(err.code)
        })

    }
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none mx-auto">
            <h2 className="text-2xl font-semibold text-center mt-5">Signup an account</h2>
            <form onSubmit={handleSubmit} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Signup</button>
                </div>
            </form>
            <p className="text-center mb-5">Already have an account? Please <Link to="/auth/login" className="text-red-500 font-semibold">Login</Link></p>
        </div>
    );
};

export default Signup;