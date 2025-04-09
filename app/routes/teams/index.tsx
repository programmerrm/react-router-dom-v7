import { Link } from "react-router";
import { TeamList } from "~/utils/teamList";

export default function Teams() {
    const teams = TeamList;
    return (
        <section>
            <h2>My Teams</h2>
            <div className="grid grid-cols-3 gap-5 w-full mt-5">
                {teams?.map((team) => (
                    <Link className="flex flex-col flex-wrap justify-center items-center p-5 border-1 border-gray-50 shadow bg-amber-100" key={team.id} to={`/teams/${team.id}`}>
                        <h2>{team.name}</h2>
                    </Link>
                ))}
            </div>
        </section>
    );
}