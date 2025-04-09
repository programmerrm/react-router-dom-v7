import { Link, Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <section>
            <h2>Welcome to Auth Section</h2>
            <h1>Rasel Mahmud</h1>
            <Link to={"/"}>Back To Home</Link>
            <Outlet />
        </section>
    );
}