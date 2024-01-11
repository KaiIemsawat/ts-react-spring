import { useState } from "react";
import "./App.css";
import TodoRowItem from "./components/TodoRowItem";
import TodoTable from "./components/TodoTable";
import AddTodoForm from "./components/AddTodoForm";

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

    const addTodo = (description, assigned) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        } else {
            rowNumber = 1;
        }

        const newTodo = {
            rowNumber,
            rowDescription: description,
            rowAssigned: assigned,
        };

        setTodos((todos) => [...todos, newTodo]);
    };

    const deleteTodo = (deleteTodoRowNumber) => {
        let filtered = todos.filter(function (value) {
            return value.rowNumber !== deleteTodoRowNumber;
        });
        setTodos(filtered);
    };

    return (
        <div className="mt-5 container">
            <div className="card">
                <div className="card-header">Your Todo's</div>
                <div className="card-body">
                    <TodoTable todos={todos} deleteTodo={deleteTodo} />
                    <AddTodoForm addTodo={addTodo} />
                </div>
            </div>
        </div>
    );
}

export default App;
