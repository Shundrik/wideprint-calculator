import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <div>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contacts</NavLink>
        </div>
        </>
    )
};
export default Header;