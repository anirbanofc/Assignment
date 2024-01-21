import React, { useState } from 'react';
import todoStyles from './TodoApp.module.css'
import UseTitle from "./component/useTitle"
export default function TodoApp() {
    let [task, setTask] = useState("");
    let [tasks, setTasks] = useState([]);
    let [addAlert, setAddAlert] = useState(false)
    let [deleteAlert, setDeleteAlert] = useState(false)

    let [Count, setCount] = useState(0)
    UseTitle(Count)


    let changeTask = ({ target: { value } }) => {
        setTask(value)
    }

    let addTask = () => {
        if (task !== "") {
            setTasks([...tasks, task]);
            setTask("")
            setAddAlert(!addAlert)
            setTimeout(() => {
                setAddAlert(false);
            }, 2000)
        }
        else {

            alert("Enter Task")
        }
    }
    let deleteTask = (index) => {
        let remainingTasks = tasks.filter((t, i) => {
            return index !== i;
        })
        setTasks(remainingTasks)
        setDeleteAlert(!deleteAlert)
        setTimeout(() => {
            setDeleteAlert(false);
        }, 3000)
    }
    function fn() {

    }
    return (
        <>
            {addAlert && <div className='alert-container'>
                <div className={todoStyles.add}>Task added Successfully! 🎉</div>
            </div>}
            {deleteAlert && <div className='alert-container'>
                <div className={todoStyles.delete}>Task deleted successfully! ❌</div>
            </div>}
            <section>


                <h2>Todo App</h2>
                <div className={todoStyles.input}>

                    <input type="text" placeholder='Task' onChange={changeTask} value={task} className='taskAdd' />
                    <button onClick={addTask}>Add</button>
                </div>
                <div className={todoStyles.tasks}>
                    {tasks.map((t, i) => {
                        return <div key={i}>
                            <span>{t}</span>
                            <button onClick={() => {
                                deleteTask(i)
                            }}>
                                Delete</button>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}