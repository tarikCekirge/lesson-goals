import type { FC, PropsWithChildren } from "react";

// interface LessonGoalProps {
//     title: string;
//     children: ReactNode
// }

type LessonGoalProps = PropsWithChildren<{ title: string }>

const LessonGoal: FC<LessonGoalProps> = ({ title, children }) => {
    return (
        <article className="p-5 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 text-white gap-4 shadow-2xl">
            <div className="space-y-2">
                <h2 className="text-xl font-bold">{title}</h2>
                {children}
            </div>
            <div>
                <button>Delete</button>
            </div>
        </article>
    )
}

export default LessonGoal