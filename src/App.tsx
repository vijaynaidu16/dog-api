import './App.css'
import DogImg from './components/DogImg'
import NavBar from './components/NavBar'
import Accodian from './components/Accodian'
import { SkeletonDemo } from './components/Skeleton'

function App() {

  return (
    <div>
     <NavBar/>
     <DogImg/>
     <Accodian/>
     <SkeletonDemo/>
    </div>
  )
}

export default App
