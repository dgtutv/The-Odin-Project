import { Box, Typography } from "@mui/material";
import InputSection from "./InputSection";
import SchoolIcon from "@mui/icons-material/School";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PersonIcon from "@mui/icons-material/Person";

function Section({ 
    type = "details", 
    isActive = false, 
    onClick, 
    ...inputProps
}) {
    const inactiveStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "12px",
        minWidth: "100%",
        cursor: "pointer",
        "&:hover": {
            outline: "2px solid black",
        },
    };

    const activeStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "8px",
        backgroundColor: "white",
        padding: "12px",
        minWidth: "100%",
        gap: "12px",
    };

    if (!isActive) {
        return (
            <Box sx={inactiveStyle} onClick={onClick}>
                {type === "details" && <PersonIcon />}
                {type === "education" && <SchoolIcon />}
                {type === "experience" && <WorkHistoryIcon />}
                <Typography variant="h6">{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
                <ArrowDropDownIcon />
            </Box>
        );
    } 
    else {
        return (
            <Box sx={activeStyle}>
                <Typography variant="h6">{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
                <InputSection type={type} {...inputProps} />
            </Box>
        );
    }
}

export default Section;
