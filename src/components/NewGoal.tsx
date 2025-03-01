import { useRef, useState, type FormEvent } from "react"
import { MdAdd } from "react-icons/md";


type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const [isDisabled, setIsDisabled] = useState(true);

    const handleInputChange = () => {
        const goalValue = goal.current?.value.trim() || "";
        const summaryValue = summary.current?.value.trim() || "";
        setIsDisabled(goalValue === "" || summaryValue === "");
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!goal.current || !summary.current) return;

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        onAddGoal(enteredGoal, enteredSummary);
        e.currentTarget.reset()

        setIsDisabled(true);

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4 bg-slate-800 rounded-lg p-6 text-white shadow-2xl">
            <p className="grid">
                <label htmlFor="goal" className="font-bold text-lg mb-0.5 ml-2">Your Goal</label>
                <input ref={goal} id='goal' onChange={handleInputChange} type="text" className=" py-3 px-2 text-lg text-slate-900 rounded-md outline-0 bg-slate-500 " />
            </p>
            <p className="grid">
                <label htmlFor="summary" className="font-bold text-lg mb-0.5 ml-2">Short Sumary</label>
                <input ref={summary} onChange={handleInputChange} id='summary' type="text" className="py-3 px-2 text-lg text-slate-900 rounded-md outline-0 bg-slate-500 " />
            </p>
            <p className="grid mt-4">
                <button disabled={isDisabled} type="submit" className="bg-slate-700 p-3 font-bold text-lg rounded-md cursor-pointer disabled:opacity-30 disabled:cursor-auto flex items-center justify-center gap-1 leading-none"> <MdAdd className="text-2xl mt-0.5" />Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal