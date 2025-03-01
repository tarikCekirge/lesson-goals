
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import image from './assets/goals.jpg'
import LessonGoal from './components/LessonGoal'
import LessonGoalList from './components/LessonGoalList'
import NewGoal from './components/NewGoal'

export interface LessonGoal {
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

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
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
        <NewGoal />
        <button onClick={handleAddGoal}>Add Goal</button>
        <LessonGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />


      </div>
    </main>
  )
}

export default App
