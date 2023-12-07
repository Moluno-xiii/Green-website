import './App.css'
import ContactUs from './components/ContactUs'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'

function App() {

  return (
    <div>
      <div className='h-[100dvh]'>

      <Navbar />
      <Hero />
      </div>
      <GetStarted />
      <ContactUs />
      <Pricing />
    </div>
  )
}

export default App
