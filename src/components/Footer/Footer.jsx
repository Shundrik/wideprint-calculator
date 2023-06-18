import { NavLink } from "react-router-dom"

const Footer=()=>{
    return(
        <div>
            <ul>
                <li><NavLink>instagram</NavLink></li>
                <li><NavLink>facebook</NavLink></li>
                <li><NavLink>linkedin</NavLink></li>
            </ul>
        </div>
    )
};

export default Footer;