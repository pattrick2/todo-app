import React, {useState} from 'react'



function Todolist(){

    const [tasks, setTasks] = useState ([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks [index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown (index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks [index]];
            setTasks(updatedTasks);
        }
    }

return(
<div className ="todo">
    <div className ="title"> TO DO LIST</div>
    <div>
        <input
        type = "text"
        placeholder = "Enter A Task..."
        value = {newTask}
        onChange={handleInputChange}/>
        <button
            className="AddBtn"
            onClick={addTask}>
                ADD TASK

        </button>
    </div>

    <ol>
        {tasks.map((task, index) =>
            <li key={index}>
                <span className="text"> {task}</span>
                <button className="DeleteBtn"
                onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <button className="MoveBtn"
                onClick={() =>moveTaskUp(index)}>
                    🔼
                </button>
                <button className="MoveBtn"
                onClick={() =>moveTaskDown(index)}>
                    🔽 
                </button>
            </li>
    )}
    </ol>

</div>
);
}
export default Todolist