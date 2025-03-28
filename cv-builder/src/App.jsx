import { useState } from 'react'
import './App.css'
import Section from './Section'
import { Box } from '@mui/material'

function App() {
  const [activeSection, setActiveSection] = useState(0)

  const style = {
    backgroundColor: "#ecedef",
    padding: "24px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: '12px',
  }

  return (
    <Box sx={style}>
      <Section type="details" isActive />
      <Section type="education" />
      <Section type="experience" />
    </Box>
  )
}

export default App
