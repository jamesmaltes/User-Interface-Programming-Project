import { useContext } from "react";
import UserContext from "../../context/userContext";

const Workouts = (props) => {
    const { user } = useContext(UserContext); // gives username of current user
    return (
        <div>
            <h2>{user.username}'s Listed Workouts:</h2>
            <ul>
                { workouts.map((workout) =>
                <li key={workout.id}> {workout.title} </li>
                ) }
            </ul>
        </div>
    );
}

export default Workouts;