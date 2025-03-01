
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import image from './assets/goals.jpg'
import LessonGoal from './components/LessonGoal'

interface LessonGoal {
  title: string,
  description: string,
  id: number
}
function App() {

  const [goals, setGoals] = useState<LessonGoal[]>([]);

  const handleAddGoal = () => {
    setGoals(prevState => {
      const newGoal: LessonGoal = {
        id: Math.random(),
        title: "React + Ts",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita?"
      }
      return [...prevState, newGoal]
    })
  }

  return (
    <main className='p-4'>
      <div className="container max-w-5xl">
        <Header image={{
          src: image,
          alt: 'A list of goals'
        }}>
          <h1 className='text-4xl font-bold'>Your Lesson Goals</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>

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

      </div>
    </main>
  )
}

export default App
