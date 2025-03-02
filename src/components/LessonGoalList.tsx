import LessonGoal from "./LessonGoal";
import { type LessonGoal as LGoal } from "../App"
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

interface LessonGoalListProps {
    goals: LGoal[];
    onDeleteGoal: (id: number) => void
};

const LessonGoalList = ({ goals, onDeleteGoal }: LessonGoalListProps) => {
    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="high" >
                You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }

    return (
        <>
            {warningBox}
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
                    <InfoBox mode="hint">
                        You have no lesson goals yet. Start adding some.
                    </InfoBox>

                )
            }
        </>
    )
}

export default LessonGoalList