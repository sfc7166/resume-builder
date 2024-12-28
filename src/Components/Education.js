import '../Styles/Education.css' // CSS for Education component

const Education = ({ education }) => {
    return (
        <div className="education-section">
            <h2>Education</h2>
            <ul className="education-list">
                {education.map((edu, index) => (
                    <li key={index} className="education-item">
                        <span className="year">{edu.year}</span>:{" "}
                        <span className="degree">{edu.degree}</span> from{" "}
                        <span className="institution">{edu.institution}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
