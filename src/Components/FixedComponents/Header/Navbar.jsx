import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div className="py-6 shadow-md">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">

                <Logo></Logo>

                <ul className="font-semibold flex gap-10">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/fevorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Fevorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            login
                        </NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;