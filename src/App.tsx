import './App.css'
import ContactUs from './components/ContactUs'
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
      <ContactUs />
    </div>
  )
}

export default App
