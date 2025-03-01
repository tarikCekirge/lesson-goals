import { type PropsWithChildren } from "react";

// interface LessonGoalProps {
//     title: string;
//     children: ReactNode
// }

const LessonGoal = ({ title, children }: PropsWithChildren<{ title: string }>) => {
    return (
        <article className="p-5 rounded-md bg-gradient-to-r from-slate-800 to-slate-600 text-white gap-4">
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