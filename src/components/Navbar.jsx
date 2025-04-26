import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  // console.log(user?.photoURL);
  const userProfile = user?.photoURL; 

  return (
    <div className="flex justify-between items-center">
      <div className="">{user?.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="w-14 h-14">
          <img className="rounded-full object-cover" src={userProfile } alt="" />
        </div>
        {user ? <button onClick={logOut} className="btn btn-error text-white">Logout</button>: <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
