import { useState } from 'react'
import './App.css'
import InputSection from './InputSection'

function App() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <>
      <InputSection type="details" />
    </>
  )
}

export default App
