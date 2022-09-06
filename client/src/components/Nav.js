import { NavLink } from "react-router-dom";

export default function Nav({user, onLogout}){

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }

    return(
        <>
            <nav>
                <ul className="nav">
                    {user ?
                        <>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                        :
                        <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        </>
                    }
                    
                    
                </ul>
            </nav>
        </>
    )
}