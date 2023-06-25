import { useState } from 'react'
import logo from './logo.svg'
import Login from './components/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-full">
      <Login />
    </div>
  )
}

export default App
