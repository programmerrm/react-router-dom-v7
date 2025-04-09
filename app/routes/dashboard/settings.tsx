import { Link } from "react-router";

export default function Settings() {
    return (
        <section>
            <h2>Settings</h2>
            <p>Manage your account settings here.</p>
            <Link to={"/"}>Back To Home</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </section>
    );
}