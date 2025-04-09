import { Link } from "react-router";

export default function Dashboard() {
    return (
        <section>
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard!</p>
            <nav>
                <Link to="/">Back To Home</Link>
                <Link to="settings">Settings</Link>
            </nav>
        </section>
    );
}
