import { Box, Typography } from '@mui/material';
import SectionInput from './SectionInput';
import SchoolIcon from '@mui/icons-material/School';

function Section ({type = "details", isActive = false}) {
    const inactiveStyle = {
        display: "flex", 
        alignItems: "center", 
        justifyContent: "flex-start", 
        backgroundColor: "white", 
        borderRadius: "8px",
    }

    const activeStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        borderRadius: "8px",
        backgroundColor: "white", 

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
                    <SectionInput type = "details"/>
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
                    <SectionInput  type = "education"/>
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
                    <SectionInput type = "experience"/>
                </Box>
            )
        }
    }
    else {
        return (<Typography variant='h6'>Invalid or missing type</Typography>)
    }
}

export default Section