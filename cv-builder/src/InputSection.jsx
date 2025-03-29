import { TextField, Typography, Box } from "@mui/material";

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

    const addEducation = () => {
        setEducation([...education, { school: "", degree: "", graduationYear: "" }]);
    };

    const updateExperience = (index, field, value) => {
        const updatedExperience = [...experience];
        updatedExperience[index][field] = value;
        setExperience(updatedExperience);
    };

    const addExperience = () => {
        setExperience([...experience, { jobTitle: "", company: "", yearsWorked: "" }]);
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
                        <Typography variant="h6">Education {index}:</Typography>
                        {renderTextField("School", edu.school, (e) => updateEducation(index, "school", e.target.value))}
                        {renderTextField("Degree", edu.degree, (e) => updateEducation(index, "degree", e.target.value))}
                        {renderTextField("Graduation Year", edu.graduationYear, (e) => updateEducation(index, "degree", e.target.value))}
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
                        <Typography variant="h6">Experience {index}:</Typography>
                        {renderTextField("Job Title", exp.jobTitle, (e) => updateExperience(index, "jobTitle", e.target.value))}
                        {renderTextField("Company", exp.company, (e) => updateExperience(index, "company", e.target.value))}
                        {renderTextField("Years Worked", exp.yearsWorked, (e) => updateExperience(index, "yearsWorked", e.target.value))}
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
