import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const handleGoogleLogin = () =>{
    googleSignIn()
    .then(result => {
      const user = result?.user;
      console.log("Affter google Login",user)
    })
    .catch(err => {
      console.log(err.code);
    })
  }
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleLogin} className="btn">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
