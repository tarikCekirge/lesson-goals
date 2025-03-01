import LessonGoal from "./LessonGoal";
import { type LessonGoal as LGoal } from "../App"

interface LessonGoalListProps {
    goals: LGoal[]
};

const LessonGoalList = ({ goals }: LessonGoalListProps) => {
    return (
        <>
            {
                goals.length > 0 ? (
                    <ul className='grid grid-cols-2 gap-4'>
                        {
                            goals.map((goal) => (
                                <li key={goal.id}>
                                    <LessonGoal title={goal.title} >
                                        <p>{goal.description}</p>
                                    </LessonGoal>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <div className="text-white text-xl bg-slate-600 p-4 text-center font-bold rounded-xl">No goals added yet.</div>

                )
            }
        </>
    )
}

export default LessonGoalList