import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Task from './Task/Task';
import './Tasks.scss';
import Form from './Form/Form';

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const tasks = [
            {
                id: uuid(),
                description: 'Start learning React',
                done: true
            },

            {
                id: uuid(),
                description: 'Update Resume',
                done: true
            },
            {
                id: uuid(),
                description: 'Apply at Northern.co for Entry Web Developer position',
                done: true
            },
            {
                id: uuid(),
                description: 'Do screening call with Northern.co',
                done: true
            },
            {
                id: uuid(),
                description: 'Do technical challenge from Northern',
                done: true
            },
            {
                id: uuid(),
                description: 'Keep waiting for feedback :-)',
                done: false
            }
        ]
        setTasks(tasks);
    }, []);

    const handleClearTasks = () => {
        setTasks([]);
    }

    const handleStatusChange = (id) => {
        let currentTasks = [...tasks];
        for (let task of currentTasks) {
            if (task.id === id) {
                task.done = !task.done;
            }
        }
        setTasks(currentTasks);
    }

    const handleRemoveChange = (id) => {
        let currentTasks = tasks.filter(item => item.id !== id);
        setTasks(currentTasks);
    }
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    return (
        <div className='tasks'>
            <h2>These are the tasks:</h2>
            <div>
                {tasks.map(
                    (task, index) => {
                        return (
                            <Task
                                key={index}
                                task={task}
                                handleStatusChange={handleStatusChange}
                                handleRemoveChange={handleRemoveChange}

                            />
                        );
                    }
                )}
            </div>

            <div className='buttonContainer'>
                <button className='clear btn btn-outline-primary' onClick={handleClearTasks}>Clear Tasks</button>
            </div>
            <div className='form'>
                <Form
                    addTask={addTask}
                />
            </div>
        </div>
    );
}