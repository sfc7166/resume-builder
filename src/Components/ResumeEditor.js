import { useState } from 'react'

function ResumeEditor({ onAdd }) {
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skill, setSkill] = useState('');

    const handleAddExperience = () => {
        if (experience.trim()) {
            onAdd('experience', experience);
            setExperience('');
        }
    };

    const handleAddEducation = () => {
        if (education.trim()) {
            onAdd('education', education);
            setEducation('');
        }
    };

    const handleAddSkill = () => {
        if (skill.trim()) {
            onAdd('skills', skill);
            setSkill('');
        }
    };

    return (
        <div className="resume-editor">
            <h2>Edit Resume</h2>
            <div className="form-section">
                <label>Experience:</label>
                <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <button onClick={handleAddExperience}>Add</button>
            </div>

            <div className="form-section">
                <label>Education:</label>
                <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                />
                <button onClick={handleAddEducation}>Add</button>
            </div>

            <div className="form-section">
                <label>Skills:</label>
                <input
                    type="text"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />
                <button onClick={handleAddSkill}>Add</button>
            </div>
        </div>
    )
}

export default ResumeEditor
