import { useState } from "react";
import "./App.css";
import TodoRowItem from "./components/TodoRowItem";
import TodoTable from "./components/TodoTable";

function App() {
    const [todos, setTodos] = useState([
        { rowNumber: 1, rowDescription: "Feed Dogs", rowAssigned: "User One" },
        { rowNumber: 2, rowDescription: "Walk Dogs", rowAssigned: "User Two" },
        {
            rowNumber: 3,
            rowDescription: "Play with Dogs",
            rowAssigned: "User Three",
        },
    ]);

    const addTodo = () => {
        if (todos.length > 0) {
            const newTodo = {
                rowNumber: todos.length + 1,
                rowDescription: "New todo",
                rowAssigned: "User Three",
            };

            setTodos((todos) => [...todos, newTodo]);
        }
    };

    return (
        <div className="mt-5 container">
            <div className="card">
                <div className="card-header">Your Todo's</div>
                <div className="card-body">
                    <TodoTable todos={todos} />
                    <button className="btn btn-primary" onClick={addTodo}>
                        Add new todo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
