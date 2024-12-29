import { useState } from "react";
import { jsPDF } from "jspdf";

function Resume() {
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);
    const [editItem, setEditItem] = useState(null);

    const handleAddItem = (type, item) => {
        if (type === "experience") setExperience([...experience, item]);
        else if (type === "education") setEducation([...education, item]);
        else if (type === "skills") setSkills([...skills, item]);
    };

    const handleDeleteItem = (type, index) => {
        if (type === "experience")
            setExperience(experience.filter((_, i) => i !== index));
        else if (type === "education")
            setEducation(education.filter((_, i) => i !== index));
        else if (type === "skills") setSkills(skills.filter((_, i) => i !== index));
    };

    const handleUpdateItem = (type, index, updatedItem) => {
        if (type === "experience") {
            const updatedExperience = [...experience];
            updatedExperience[index] = updatedItem;
            setExperience(updatedExperience);
        } else if (type === "education") {
            const updatedEducation = [...education];
            updatedEducation[index] = updatedItem;
            setEducation(updatedEducation);
        } else if (type === "skills") {
            const updatedSkills = [...skills];
            updatedSkills[index] = updatedItem;
            setSkills(updatedSkills);
        }
        setEditItem(null);
    };

    const handlePrint = () => {
        const doc = new jsPDF();
        doc.html(document.querySelector(".resume"), {
            callback: function (pdf) {
                pdf.save("resume.pdf");
            },
        });
    };

    return (
        <div className="resume">
            <button className="print-button" onClick={handlePrint}>
                Print Resume
            </button>
            <h1>Resume</h1>

            <div className="resume-section">
                <h2>Experience</h2>
                <ListManager
                    items={experience}
                    onAdd={(item) => handleAddItem("experience", item)}
                    onDelete={(index) => handleDeleteItem("experience", index)}
                    onEdit={(index) => setEditItem({ type: "experience", index })}
                    editItem={editItem}
                    onUpdate={(item) => handleUpdateItem("experience", editItem.index, item)}
                />
            </div>

            <div className="resume-section">
                <h2>Education</h2>
                <ListManager
                    items={education}
                    onAdd={(item) => handleAddItem("education", item)}
                    onDelete={(index) => handleDeleteItem("education", index)}
                    onEdit={(index) => setEditItem({ type: "education", index })}
                    editItem={editItem}
                    onUpdate={(item) => handleUpdateItem("education", editItem.index, item)}
                />
            </div>

            <div className="resume-section">
                <h2>Skills</h2>
                <ListManager
                    items={skills}
                    onAdd={(item) => handleAddItem("skills", item)}
                    onDelete={(index) => handleDeleteItem("skills", index)}
                    onEdit={(index) => setEditItem({ type: "skills", index })}
                    editItem={editItem}
                    onUpdate={(item) => handleUpdateItem("skills", editItem.index, item)}
                />
            </div>
        </div>
    );
}

function ListManager({ items, onAdd, onDelete, onEdit, editItem, onUpdate }) {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim() !== "") {
            onAdd(input);
            setInput("");
        }
    };

    const handleUpdate = () => {
        if (input.trim() !== "") {
            onUpdate(input);
            setInput("");
        }
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onEdit(index)}>Edit</button>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            {editItem ? (
                <>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Edit item"
                    />
                    <button onClick={handleUpdate}>Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add item"
                    />
                    <button onClick={handleAdd}>Add</button>
                </>
            )}
        </div>
    )
}

export default Resume



