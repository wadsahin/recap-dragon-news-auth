import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <h2 className="bg-gray-200 p-5 text-center font-bold text-2xl my-5">Auth Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;