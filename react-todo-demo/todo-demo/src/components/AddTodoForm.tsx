import React, { useState } from "react";

const AddTodoForm: React.FC<{
    addTodo: Function;
}> = (props) => {
    const [description, setDescription] = useState("");
    const [assigned, setAssigned] = useState("");

    const submitTodo = () => {
        if (description !== "" && assigned !== "") {
            props.addTodo(description, assigned);
            setDescription("");
            setAssigned("");
        }
    };

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setAssigned(e.target.value)}
                        className="form-control"
                        value={assigned}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        required
                        name=""
                        id=""
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={submitTodo}
                >
                    Submit New Todo
                </button>
            </form>
        </div>
    );
};
export default AddTodoForm;
