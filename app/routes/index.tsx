import type { Route } from "./+types/index";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <section>
            <h2>Welcome to my home page</h2>
            <div className="flex flex-row flex-wrap items-center gap-x-5">
                <Link to={"/about/"}>About</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
                <Link to={"/contact"}>Contact Us</Link>
                <Link to={"/teams"}>Teams</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
            </div>
        </section>
    );
}
