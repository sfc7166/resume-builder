import { useState } from "react";

function ResumeEditor({ onAdd }) {
    const [inputValues, setInputValues] = useState({
        experience: "",
        education: "",
        skills: "",
    });

    const handleChange = (type, value) => {
        setInputValues((prev) => ({ ...prev, [type]: value }));
    };

    const handleAdd = (type) => {
        if (inputValues[type].trim()) {
            onAdd(type, inputValues[type]);
            setInputValues((prev) => ({ ...prev, [type]: "" }));
        }
    };

    return (
        <div className="resume-editor">
            <h2>Edit Resume</h2>
            {["experience", "education", "skills"].map((type) => (
                <div key={type} className="form-section">
                    <label>{type.charAt(0).toUpperCase() + type.slice(1)}:</label>
                    <input
                        type="text"
                        value={inputValues[type]}
                        onChange={(e) => handleChange(type, e.target.value)}
                    />
                    <button onClick={() => handleAdd(type)}>Add</button>
                </div>
            ))}
        </div>
    );
}

export default ResumeEditor;
