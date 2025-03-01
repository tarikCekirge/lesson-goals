const LessonGoal = ({ title, description }: { title: string, description: string }) => {
    return (
        <article className="p-5 rounded-md bg-gradient-to-r from-slate-800 to-slate-600 text-white gap-4">
            <div className="space-y-2">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </article>
    )
}

export default LessonGoal