import { Link } from "react-router"

export default function Register() {
    return (
        <div>
            <h2>Register Form</h2>
            <Link to={"/login"}>Login</Link>
        </div>
    );
}