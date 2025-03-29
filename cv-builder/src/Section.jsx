import { Box, Typography } from '@mui/material';
import InputSection from './InputSection';
import SchoolIcon from '@mui/icons-material/School';

function Section ({type = "details", isActive = false}) {
    const inactiveStyle = {
        display: "flex", 
        alignItems: "center", 
        justifyContent: "flex-start", 
        backgroundColor: "white", 
        borderRadius: "8px",
        padding: '12px',
        minWidth: "100%",
    }

    const activeStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        borderRadius: "8px",
        backgroundColor: "white", 
        padding: '12px',
        minWidth: "100%",
        gap: "12px",
    }

    if (type === "details"){
        if(!isActive){
            return (
                <Box sx={inactiveStyle}>
                    <Typography variant='h6'>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
                </Box>
            )
        }
        else{
            return (
                <Box sx={activeStyle}>
                    <Typography variant = "h6">Details</Typography>
                    <InputSection type = "details"/>
                </Box>
            )
        }
    }

    else if (type === "education"){
        if(!isActive){
            return (
                <Box sx={inactiveStyle}>
                    <SchoolIcon/>
                    <Typography variant='h6'>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
                </Box>
            )
        }
        else{
            return (
                <Box sx={activeStyle}>
                    <Typography variant = "h6">Education</Typography>
                    <InputSection  type = "education"/>
                </Box>
            )
        }
    }

    else if (type === "experience"){
        if(!isActive){
            return (
                <Box sx={inactiveStyle}>
                    <Typography variant='h6'>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
                </Box>
            )
        }
        else{
            return (
                <Box sx={activeStyle}>
                    <Typography variant = "h6">Experience</Typography>
                    <InputSection type = "experience"/>
                </Box>
            )
        }
    }
    else {
        return (<Typography variant='h6'>Invalid or missing type</Typography>)
    }
}

export default Section