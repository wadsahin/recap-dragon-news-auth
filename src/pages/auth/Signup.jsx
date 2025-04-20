import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none mx-auto">
            <h2 className="text-2xl font-semibold text-center mt-5">Signup an account</h2>
            <form className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
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