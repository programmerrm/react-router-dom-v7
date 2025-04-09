import { Link } from "react-router";
import type { Route } from "../about/+types/index";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About" },
        { name: "description", content: "About page" },
    ];
};

export default function About() {
    return (
        <section>
            <h2>About</h2>
            <Link to={"/"}>Home</Link>
        </section>
    );
}