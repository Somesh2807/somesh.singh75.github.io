// Basic Resume Information
const resumeData = {
    name: "Somesh Jatav",
    jobTitle: "Data Analyst",
    contactInfo: {
        email: "somesh@example.com",
        phone: "+1234567890",
        linkedin: "https://www.linkedin.com/in/someshjatav",
        location: "City, Country"
    },
    summary: "Passionate Data Analyst with experience in Excel, SQL, and Power BI. Skilled in turning data into actionable insights.",
    skills: ["Excel", "SQL", "Power BI", "Data Visualization", "Data Cleaning", "Python"],
    experience: [
        {
            company: "Company A",
            role: "Junior Data Analyst",
            duration: "Jan 2022 - Present",
            description: "Analyzed sales data, created dashboards, and provided insights for decision-making."
        },
        {
            company: "Company B",
            role: "Data Analyst Intern",
            duration: "Jun 2021 - Dec 2021",
            description: "Assisted in data cleaning and visualization tasks. Developed SQL queries to extract data."
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University XYZ",
            duration: "2018 - 2022"
        }
    ]
};

// Populate Resume Data
document.getElementById("name").textContent = resumeData.name;
document.getElementById("job-title").textContent = resumeData.jobTitle;

const contactInfoEl = document.getElementById("contact-info");
contactInfoEl.innerHTML = `
    <p>Email: <a href="mailto:${resumeData.contactInfo.email}">${resumeData.contactInfo.email}</a></p>
    <p>Phone: ${resumeData.contactInfo.phone}</p>
    <p>LinkedIn: <a href="${resumeData.contactInfo.linkedin}" target="_blank">${resumeData.contactInfo.linkedin}</a></p>
    <p>Location: ${resumeData.contactInfo.location}</p>
`;

document.getElementById("summary").textContent = resumeData.summary;

const skillsListEl = document.getElementById("skills-list");
resumeData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsListEl.appendChild(li);
});

const experienceListEl = document.getElementById("experience-list");
resumeData.experience.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("experience");
    div.innerHTML = `
        <h3>${exp.role} at ${exp.company}</h3>
        <p>${exp.duration}</p>
        <p>${exp.description}</p>
    `;
    experienceListEl.appendChild(div);
});

const educationListEl = document.getElementById("education-list");
resumeData.education.forEach(edu => {
    const div = document.createElement("div");
    div.classList.add("education");
    div.innerHTML = `
        <h3>${edu.degree}</h3>
        <p>${edu.school}</p>
        <p>${edu.duration}</p>
    `;
    educationListEl.appendChild(div);
});
