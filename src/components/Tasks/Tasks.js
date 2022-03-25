import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Task from './Task/Task';
import './Tasks.scss';
import Form from './Form/Form';

import { useSelector, useDispatch } from 'react-redux';
import { setTasks, clearTasks } from './../../redux/tasksSlice';


export default function Tasks() {
    const tasks = useSelector((state) => state.tasks.list);
    const dispatch = useDispatch();

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
        dispatch(setTasks(tasks));
    }, []);

    const handleClearTasks = () => {
        dispatch(clearTasks());
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
                            />
                        );
                    }
                )}
            </div>

            <div className='buttonContainer'>
                <button className='clear btn btn-outline-primary' onClick={handleClearTasks}>Clear Tasks</button>
            </div>
            <div className='form'>
                <Form />
            </div>
        </div>
    );
}