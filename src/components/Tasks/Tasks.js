import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Task from './Task/Task';
import './Tasks.scss';
import Form from './Form/Form';

import { useSelector, useDispatch } from 'react-redux';
import { setTasks, clearTasks } from './../../redux/tasksSlice';

import api from '../../api'


export default function Tasks() {
    const tasks = useSelector((state) => state.tasks.list);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/tasks')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setTasks(response.data));
                    console.log('Tasks received from API')
                    setLoading(false);
                }
            })

    }, []);

    const handleClearTasks = () => {
        api.delete('/tasks/all')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(clearTasks());
                }
            })
    }


    return (
        <div className='tasks'>

            {loading && (
                <div className="overlay">
                    <div className="overlay__wrapper">Loading
                        <div className="overlay__spinner"></div>
                    </div>
                </div>
            )}

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