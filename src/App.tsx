
import './App.css'
import Header from './components/Header'
import image from './assets/goals.jpg'
import LessonGoal from './components/LessonGoal'


function App() {

  return (
    <main>
      <div className="container">
        <Header image={{
          src: image,
          alt: 'A list of goals'
        }}>
          <h1 className='text-4xl font-bold'>Your Lesson Goals</h1>
        </Header>
        <LessonGoal title="Learn React+ TS" >
          <p>Lorem ipsum dolor sit amet.</p>
        </LessonGoal>
      </div>
    </main>
  )
}

export default App
