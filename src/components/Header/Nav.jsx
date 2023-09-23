import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="font-serif lg:flex justify-between lg:items-start text-center shadow-lg p-5 ">

            <div>
                <h1 className="text-3xl font-semibold"> PhoneShop</h1>
            </div>



            <div>
                <nav >
                    <ul className="gap-3 flex justify-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/favorite"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                }
                            >
                                Favorites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    );
};

export default Nav;