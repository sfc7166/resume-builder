import { useReducer, useState } from "react";
import { jsPDF } from "jspdf";

const initialState = {
    experience: [],
    education: [],
    skills: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                [action.payload.type]: [
                    ...state[action.payload.type],
                    action.payload.item,
                ],
            };
        case "DELETE_ITEM":
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].filter(
                    (_, index) => index !== action.payload.index
                ),
            };
        case "UPDATE_ITEM":
            const updatedItems = [...state[action.payload.type]];
            updatedItems[action.payload.index] = action.payload.item;
            return {
                ...state,
                [action.payload.type]: updatedItems,
            };
        default:
            return state;
    }
};

function Resume() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [editItem, setEditItem] = useState(null);
    const [input, setInput] = useState("");

    const handleEdit = (type, index) => {
        setEditItem({ type, index });
        setInput(state[type][index]);
    };

    const handleUpdate = () => {
        if (input.trim()) {
            dispatch({
                type: "UPDATE_ITEM",
                payload: { type: editItem.type, index: editItem.index, item: input },
            });
            setEditItem(null);
            setInput("");
        }
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

            {["experience", "education", "skills"].map((type) => (
                <div key={type} className="resume-section">
                    <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                    <ul>
                        {state[type].map((item, index) => (
                            <li key={index}>
                                {item}
                                <button onClick={() => handleEdit(type, index)}>Edit</button>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "DELETE_ITEM",
                                            payload: { type, index },
                                        })
                                    }
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    {editItem && editItem.type === type ? (
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
                                placeholder={`Add ${type}`}
                            />
                            <button
                                onClick={() => {
                                    if (input.trim()) {
                                        dispatch({
                                            type: "ADD_ITEM",
                                            payload: { type, item: input },
                                        });
                                        setInput("");
                                    }
                                }}
                            >
                                Add
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Resume







