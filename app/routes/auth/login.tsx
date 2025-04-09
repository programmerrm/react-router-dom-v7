import { Link } from "react-router";

export default function Login() {
    return (
        <div>
            <h2>Login Form</h2>
            <Link to={"/register"}>Register</Link>
        </div>
    );
}