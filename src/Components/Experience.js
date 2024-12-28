import '../Styles/Experience.css'

function Experience({ experience }) {
    return (
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((item, index) => (
                <div key={index}>
                    <p>{item.year} - {item.company} - {item.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;

