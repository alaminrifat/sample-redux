import { useState } from "react";
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/slice";
import { toast } from "react-hot-toast";
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
        toast.success("Todo Added", {
            icon: "💝",
        });
        setTextInput("");
    };

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
        toast.success("Todo Removed", {
            icon: "💔",
        });
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
