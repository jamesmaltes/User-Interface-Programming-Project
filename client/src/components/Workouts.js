const trainer =
    {
        trainerid: 1,
        trainername: "James"
    }

const workouts = [
    {
        id: 1,
        title: "Workout week 1"
    },

    {
        id: 2,
        title: "Workout week 2"
    }
]

function Workouts() {
    return (
        <div>
            <h2>{trainer.trainername}'s Listed Workouts:</h2>
            <ul>
                { workouts.map((workout) =>
                <li key={workout.id}> {workout.title} </li>
                ) }
            </ul>
        </div>
    );
}

export default Workouts;