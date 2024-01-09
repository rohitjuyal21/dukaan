import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex font-inter'>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
