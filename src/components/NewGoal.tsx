import { type FormEvent } from "react"

const NewGoal = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4 bg-slate-800 rounded-lg p-6 text-white shadow-2xl">
            <p className="grid">
                <label htmlFor="goal" className="font-bold text-lg mb-0.5 ml-2">Your Goal</label>
                <input id='goal' type="text" className=" py-3 px-2 text-lg text-slate-900 rounded-md outline-0 bg-slate-500 " />
            </p>
            <p className="grid">
                <label htmlFor="summary" className="font-bold text-lg mb-0.5 ml-2">Short Sumary</label>
                <input id='summary' type="text" className="py-3 px-2 text-lg text-slate-900 rounded-md outline-0 bg-slate-500 " />
            </p>
            <p className="grid mt-4">
                <button className="bg-slate-700 p-3 font-bold text-lg rounded-md cursor-pointer">Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal