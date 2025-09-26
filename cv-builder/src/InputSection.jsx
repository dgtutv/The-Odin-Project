import { TextField, Typography, Box, Button } from "@mui/material";

function InputSection({
    type = "details",
    fullName, setFullName,
    email, setEmail,
    phone, setPhone,
    address, setAddress,
    education, setEducation,
    experience, setExperience
}) {
    const renderTextField = (label, value, onChange) => (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            margin="medium"
        />
    );

    const updateEducation = (index, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = value;
        setEducation(updatedEducation);
    };


    const updateExperience = (index, field, value) => {
        const updatedExperience = [...experience];
        updatedExperience[index][field] = value;
        setExperience(updatedExperience);
    };


    const boxStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "8px",
        backgroundColor: "white",
        padding: "10px",
        width: "380px",
        gap: "12px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        outline: "1px solid gray",

    }

    const removeEducation = (index) => {
        const updatedEducation = [...education];
        updatedEducation.splice(index, 1);
        setEducation(updatedEducation);
    }

    const removeExperience = (index) => {
        const updatedExperience = [...experience];
        updatedExperience.splice(index, 1);
        setExperience(updatedExperience);
    }

    if (type === "details") {
        return (
            <>
                {renderTextField("Full Name", fullName, (e) => setFullName(e.target.value))}
                {renderTextField("Email", email, (e) => setEmail(e.target.value))}
                {renderTextField("Phone Number", phone, (e) => setPhone(e.target.value))}
                {renderTextField("Address", address, (e) => setAddress(e.target.value))}
            </>
        );
    } 
    else if (type === "education") {
        return (
            <>
                {education.map((edu, index) =>(
                    <Box key={index} sx={boxStyle}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <Typography variant="h6">Education {index+1}:</Typography>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => removeEducation(index)}
                                sx={{ backgroundColor: "#d21919ff", "&:hover": { backgroundColor: "#c01515ff" } }}
                            >
                                Remove
                            </Button>
                        </Box>
                        {renderTextField("School", edu.school, (e) => updateEducation(index, "school", e.target.value))}
                        {renderTextField("Degree", edu.degree, (e) => updateEducation(index, "degree", e.target.value))}
                        {renderTextField("Start Year", edu.startYear, (e) => updateEducation(index, "startYear", e.target.value))}
                        {renderTextField("End Year", edu.endYear, (e) => updateEducation(index, "endYear", e.target.value))}
                    </Box>
                ))}
                
            </>
        );
    } 
    else if (type === "experience") {
        return (
            <>
                {experience.map((exp, index) => (
                    <Box key={index} sx={boxStyle}>
                        <Typography variant="h6">Experience {index+1}:</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <Typography variant="h6">Education {index+1}:</Typography>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => removeExperience(index)}
                                sx={{ backgroundColor: "#d21919ff", "&:hover": { backgroundColor: "#c01515ff" } }}
                            >
                                Remove
                            </Button>
                        </Box>
                        {renderTextField("Job Title", exp.jobTitle, (e) => updateExperience(index, "jobTitle", e.target.value))}
                        {renderTextField("Company", exp.company, (e) => updateExperience(index, "company", e.target.value))}
                        {renderTextField("Location", exp.location, (e) => updateExperience(index, "location", e.target.value))}
                        {renderTextField("Start Year", exp.startYear, (e) => updateExperience(index, "startYear", e.target.value))}
                        {renderTextField("End Year", exp.endYear, (e) => updateExperience(index, "endYear", e.target.value))}
                    </Box>
                ))}
                
            </>
        );
    } 
    else {
        return <Typography variant="h6" color="error">Error: No type provided</Typography>;
    }
}

export default InputSection;
