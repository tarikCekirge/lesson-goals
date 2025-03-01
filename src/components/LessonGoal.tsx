import type { FC, PropsWithChildren } from "react";
import { FaRegTrashCan } from "react-icons/fa6";


// interface LessonGoalProps {
//     title: string;
//     children: ReactNode
// }

type LessonGoalProps = PropsWithChildren<
    {
        id: number,
        title: string,
        onDelete: (id: number) => void
    }>

const LessonGoal: FC<LessonGoalProps> = ({ id, title, children, onDelete }) => {
    return (
        <article className="p-5 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 text-white gap-4 shadow-2xl flex justify-between">
            <div className="space-y-2 grow">
                <h2 className="text-xl font-bold">{title}</h2>
                {children}
            </div>
            <div>
                <button onClick={() => onDelete(id)} className="cursor-pointer"><FaRegTrashCan className="text-white text-xl" /></button>
            </div>
        </article>
    )
}

export default LessonGoal