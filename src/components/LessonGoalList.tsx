import LessonGoal from "./LessonGoal";
import { type LessonGoal as LGoal } from "../App"

interface LessonGoalListProps {
    goals: LGoal[];
    onDeleteGoal: (id: number) => void
};

const LessonGoalList = ({ goals, onDeleteGoal }: LessonGoalListProps) => {
    return (
        <>
            {
                goals.length > 0 ? (
                    <ul className='grid grid-cols-2 gap-4'>
                        {
                            goals.map((goal) => (
                                <li key={goal.id} >
                                    <LessonGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
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