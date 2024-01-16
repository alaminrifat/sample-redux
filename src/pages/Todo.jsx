import { useState } from "react";
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/slice";
const Todo = () => {
    const [textInput, setTextInput] = useState("");
    const handleTextChange = (newValue) => {
        setTextInput(newValue);
    };

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(
            addTodo({
                text: textInput,
            })
        );
        console.log('Action dispatched: "addTodo"');
        setTextInput("");
    };

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
        console.log('Action dispatched: "removeTodo"');
    };
    return (
        <div>
            TODO
            <Textbox
                value={textInput}
                onChange={handleTextChange}
                onEnter={handleAdd}
            />
            <Button onClick={handleAdd} title={"Add"} size={"large"} />
            <hr />
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    style={{
                        display: "flex",
                        direction: "row",
                        gap: "10px",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <div>{`${todo.id}. ${todo.text}`}</div>
                    <Button
                        onClick={() => handleDelete(todo.id)}
                        title={"delete"}
                        size={"small"}
                    />
                </div>
            ))}
        </div>
    );
};

export default Todo;
