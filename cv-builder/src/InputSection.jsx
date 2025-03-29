import { TextField, Typography } from "@mui/material";

function InputSection({
    type = "details",
    fullName, setFullName,
    email, setEmail,
    phone, setPhone,
    address, setAddress,
    school, setSchool,
    degree, setDegree,
    graduationYear, setGraduationYear,
    jobTitle, setJobTitle,
    company, setCompany,
    yearsWorked, setYearsWorked
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
                {renderTextField("School", school, (e) => setSchool(e.target.value))}
                {renderTextField("Degree", degree, (e) => setDegree(e.target.value))}
                {renderTextField("Graduation Year", graduationYear, (e) => setGraduationYear(e.target.value))}
            </>
        );
    } 
    else if (type === "experience") {
        return (
            <>
                {renderTextField("Job Title", jobTitle, (e) => setJobTitle(e.target.value))}
                {renderTextField("Company", company, (e) => setCompany(e.target.value))}
                {renderTextField("Years Worked", yearsWorked, (e) => setYearsWorked(e.target.value))}
            </>
        );
    } 
    else {
        return <Typography variant="h6" color="error">Error: No type provided</Typography>;
    }
}

export default InputSection;
