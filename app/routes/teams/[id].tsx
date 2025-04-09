import { useParams } from "react-router";
import { TeamList } from "~/utils/teamList";

export default function TeamId() {
    const { id } = useParams();
    const team = TeamList.find((team) => team.id === Number(id));
    return (
        <div>
            <h2>Team ID: {id}</h2>
            <h4>Name: {team?.name}</h4>
        </div>
    );
}