import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  // On mouse hover
  const onMouseHover = (e) =>{
    e.preventDefault();
    setHover(true);
  }
  // On mouse leave
  const onMouseOut = (e) =>{
    e.preventDefault();
    setHover(false);
  }

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
        <div className="flex items-center gap-3">
          {
            hover && <strong className="">{user?.displayName}</strong>
          }
          <img 
          className="w-14 h-14 rounded-full object-cover" 
          onMouseEnter={(e) => onMouseHover(e)}
          onMouseLeave={(e) => onMouseOut(e)}
          src={userProfile } alt="" />
        </div>
        {user ? <button onClick={logOut} className="btn btn-error text-white">Logout</button>: <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
