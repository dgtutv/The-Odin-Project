import { useState } from "react";
import { Box, TextField, Typography } from '@mui/material';

function InputSection({ type = "details" }) {
    const [fullName, setFullName] = useState("John Smith");
    const [email, setEmail] = useState("johnsmith@gmail.ca");
    const [phone, setPhone] = useState("(604)-123-4567");
    const [address, setAddress] = useState("123 ABC Street, Vancouver, BC, Canada");

    const [school, setSchool] = useState("Simon Fraser University");
    const [degree, setDegree] = useState("Computer Science");
    const [graduationYear, setGraduationYear] = useState("2026");

    const [jobTitle, setJobTitle] = useState("Full Stack Developer");
    const [company, setCompany] = useState("ViRA360");
    const [yearsWorked, setYearsWorked] = useState("2");

    const renderTextField = (label, value, onChange) =>(
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            margin="medium"
        />
    );

    if(type === "details"){
        return(
            <>
                {renderTextField("Full Name", fullName, (event) => setFullName(event.target.value))}
                {renderTextField("Email", email, (event) => setEmail(event.target.value))}
                {renderTextField("Phone Number", phone, (event) => setPhone(event.target.value))}
                {renderTextField("Address", address, (event) => setAddress(event.target.value))}
            </>
        );
    }
    else if(type === "education"){
        return (
            <>
                {renderTextField("School", school, (event) => setSchool(event.target.value))}
                {renderTextField("Degree", degree, (event) => setDegree(event.target.value))}
                {renderTextField("Graduation Year", graduationYear, (event) => setGraduationYear(event.target.value))}
            </>
        );
    }
    else if(type === "experience"){
        return (
            <>
                {renderTextField("Job Title", jobTitle, (event) => setJobTitle(event.target.value))}
                {renderTextField("Company", company, (event) => setCompany(event.target.value))}
                {renderTextField("Years Worked", yearsWorked, (event) => setYearsWorked(event.target.value))}
            </>
        );
    }
    else{
        return <Typography variant="h6" color="error">Error: No type provided</Typography>;
    }
}

export default InputSection;