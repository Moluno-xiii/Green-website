import './App.css'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <div className='h-[100vh]'>

      <Navbar />
      <Hero />
      </div>
      <GetStarted />
    </div>
  )
}

export default App
