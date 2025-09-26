import { Box, Typography, Grid } from "@mui/material";

function Resume({
    fullName,
    email,
    phone,
    address,
    education,
    experience,
}) {
    return (
        <Box sx={{ backgroundColor: "white", p: 3, width: "600px", height: "min",  mx: "auto", boxShadow: 3, aspectRatio: "1.3 / 1" }}>
            <Box sx={{ backgroundColor: "#0d3552", color: "white", p: 2, textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold">{fullName}</Typography>
                <Typography variant="body1">{email} | {phone} | {address}</Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ backgroundColor: "#e0e0e0", p: 1 }}>
                    Education
                </Typography>
                {education.map((edu, index) => (
                    <Box key={index} sx={{ my: 1 }}>
                        <Typography fontWeight="bold">{edu.school}</Typography>
                        <Typography>{edu.degree} ({edu.startYear} - {edu.endYear})</Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ backgroundColor: "#e0e0e0", p: 1 }}>
                    Professional Experience
                </Typography>
                {experience.map((exp, index) => (
                    <Box key={index} sx={{ my: 1 }}>
                        <Typography fontWeight="bold">{exp.company} - {exp.jobTitle}</Typography>
                        <Typography>{exp.location} | {exp.startYear} - {exp.endYear} </Typography>
                        <Typography variant="body2">{exp.description}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Resume;
