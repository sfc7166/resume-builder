import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import resumeData from '../resumeData';

function Resume() {
    const { experience, education, skills } = resumeData;

    return (
        <div className="resume">
            <button className="print-button" onClick={() => window.print()}>Print Resume
            </button>
            <h1>Resume</h1>
            {experience.length > 0 && <Experience experience={experience} />}
            {education.length > 0 && <Education education={education} />}
            {skills.length > 0 && <Skills skills={skills} />}
        </div>
    );
}

export default Resume;

