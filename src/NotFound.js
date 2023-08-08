import {  NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Error Code: 404</h1>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <NavLink to="/">Back to the homepage...</NavLink>
        </div>
     );
}
 
export default NotFound;