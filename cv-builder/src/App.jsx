import { useState } from 'react'
import Section from './Section'
import { Box } from '@mui/material'

function App() {
  const [activeSection, setActiveSection] = useState(0)

  const inputStyle = {
    padding: "24px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: '12px',
  }

  const globalStyle = {
    backgroundColor: "#ecedef",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: '12px',
    minHeight: '100vh',
  }

  function onclick(event){
    
  }

  return (
    <Box sx={globalStyle}>
      <Box sx={inputStyle}>
        <Section type="details" isActive />
        <Section type="education" />
        <Section type="experience" />
      </Box>
    </Box>
  )
}

export default App
