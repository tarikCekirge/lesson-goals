
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

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals(prevState => {
      const newGoal: LessonGoal = {
        id: Math.random(),
        title: goal,
        description: summary
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
        <NewGoal onAddGoal={handleAddGoal} />
        <LessonGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />


      </div>
    </main>
  )
}

export default App
