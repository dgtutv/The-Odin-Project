import { useState } from "react";
import Section from "./Section";
import { Box } from "@mui/material";
import Resume from "./Resume";

function App() {
    const [activeSection, setActiveSection] = useState(0);
    
    const [fullName, setFullName] = useState("John Smith");
    const [email, setEmail] = useState("johnsmith@gmail.ca");
    const [phone, setPhone] = useState("(604)-123-4567");
    const [address, setAddress] = useState("123 ABC Street, Vancouver, BC, Canada");

    const [education, setEducation] = useState([{
        school: "Simon Fraser University",
        degree: "Computer Science",
        graduationYear: "2026"
    }]);

    const [experience, setExperience] = useState([{
        jobTitle: "Full Stack Developer",
        company: "ViRA360",
        yearsWorked: "2",
    }]);

    const inputStyle = {
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "12px",
    };

    const globalStyle = {
        backgroundColor: "#ecedef",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        minHeight: "100vh",
        "@media (max-width: 1200px)": {
            flexDirection: "column",
        },
    };

    const resumeStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    function expandShrink(sectionIndex) {
        setActiveSection(sectionIndex);
    }

    function addEducation() {
        setEducation([...education, { school: "", degree: "", graduationYear: "" }]);
    }

    function addExperience() {
        setExperience([...experience, { jobTitle: "", company: "", yearsWorked: "" }]);
    }

    return (
        <Box sx={globalStyle}>
            <Box sx={inputStyle}>
                <Section 
                    type="details" 
                    isActive={activeSection === 0} 
                    onClick={() => expandShrink(0)}
                    fullName={fullName} setFullName={setFullName}
                    email={email} setEmail={setEmail}
                    phone={phone} setPhone={setPhone}
                    address={address} setAddress={setAddress}
                />
                <Section 
                    type="education" 
                    isActive={activeSection === 1} 
                    onClick={() => expandShrink(1)}
                    education = {education} 
                    setEducation = {setEducation}
                    addEducation = {addEducation}
                />
                <Section 
                    type="experience" 
                    isActive={activeSection === 2} 
                    onClick={() => expandShrink(2)}
                    experience = {experience}
                    setExperience = {setExperience}
                    addExperience = {addExperience}
                />
            </Box>
            <Box sx={resumeStyle}>
                <Resume fullName={fullName} email={email} phone={phone} address={address} education={education} experience={experience}/>
            </Box>
        </Box>
    );
}

export default App;