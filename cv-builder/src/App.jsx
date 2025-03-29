import { useState } from "react";
import Section from "./Section";
import { Box } from "@mui/material";

function App() {
    const [activeSection, setActiveSection] = useState(0);
    
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

    return (
        <Box sx={globalStyle}>
            <Box sx={inputStyle}>	//Edit resume section
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
                    school={school} setSchool={setSchool}
                    degree={degree} setDegree={setDegree}
                    graduationYear={graduationYear} setGraduationYear={setGraduationYear}
                />
                <Section 
                    type="experience" 
                    isActive={activeSection === 2} 
                    onClick={() => expandShrink(2)}
                    jobTitle={jobTitle} setJobTitle={setJobTitle}
                    company={company} setCompany={setCompany}
                    yearsWorked={yearsWorked} setYearsWorked={setYearsWorked}
                />
            </Box>
            <Box sx={resumeStyle}>
                
            </Box>
        </Box>
    );
}

export default App;