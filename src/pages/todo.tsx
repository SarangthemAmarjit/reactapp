import { useState } from "react";


const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [task, setTask] = useState("");

    const addTodo = () => {
        if (task.trim() !== "") {
            setTodos([...todos, task]);
            setTask("");
        }
    };
    const deleteTask = (index: number) => {
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    };

    return (
        <center>
            <div className="todo-container" style={{

                height: "70vh",
                padding: "20px",
                marginTop: "100px"


            }}>
                <h2>Todo Page</h2>
                <input style={{
                    width: "30%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    marginTop: "20px",
                    marginRight: "20px"
                }} className="form"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button style={{
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    cursor: "pointer"
                }} onClick={addTodo}>Add</button>

                <ul>
                    {todos.length === 0 ?
                        (<div style={{
                            marginTop: 50,

                            maxWidth: 500
                        }}>
                            <center>NO TASK FOUND</center>
                        </div>) :

                        todos.map((todo, index) => (
                            <>
                                <li
                                    style={{
                                        maxWidth: "500px",
                                        padding: "10px",
                                        borderBottom: "1px solid #eee",
                                        color: "#0d6303ff",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                    key={index}
                                >
                                    {index + 1}. {todo}

                                    <button
                                        style={{
                                            padding: "5px 10px",
                                            border: "none",
                                            borderRadius: "5px",
                                            backgroundColor: "#dc3545",
                                            color: "#fff",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => deleteTask(index)}
                                    >
                                        Delete
                                    </button>
                                </li>



                            </>
                        ))}
                </ul>
            </div>
        </center>
    );
}
export default TodoPage;


