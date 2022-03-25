import './Task.scss'
import { useDispatch } from 'react-redux';
import { changeTaskStatus, removeTask } from '../../../redux/tasksSlice';

import api from '../../../api';

function Task(props) {
    const dispatch = useDispatch();

    const id = props.task.id;

    const handleStatusClick = () => {
        const updatedTask = {
            ...props.task,
            done: !props.task.done
        }
        api.put('/tasks/' + id, updatedTask)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(changeTaskStatus(id));
                }
            })

    }

    const handleRemoveClick = () => {
        api.delete('/tasks/' + id)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(removeTask(id));
                }
            })
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>{props.task.description}</h3>
                <div className='card-subtitle text-muted mb-1'>{props.task.id}</div>
                <div className='card-subtitle text-muted mb-1'>Status: {props.task.done ? <span className='statusCompleted'>Completed</span> : <span className='statusOpen'>Open</span>}</div>
                <div className='buttonContainer'>
                    <button onClick={handleStatusClick} className='btn btn-outline-success btn-sm'>Change Status</button>
                    <button onClick={handleRemoveClick} className='btn btn-sm btn-outline-danger' >Remove Task</button>
                </div>
            </div>
        </div>
    );
}

export default Task;