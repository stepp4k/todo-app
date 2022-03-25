import { useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import './Form.scss';

import { addTask } from '../../../redux/tasksSlice';
import { useDispatch } from 'react-redux';

import api from '../../../api';

export default function Form(props) {
    const dispatch = useDispatch();

    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [saving, setSaving] = useState(false);

    const handleDescriptionChange = (e) => {
        //console.log(e.target.value);
        setDescription(e.target.value)
    }

    const handleStatusChange = (e) => {
        setDone(e.target.value);
    }

    const handleSubmitForm = (e) => {
        //console.log('submitting!')
        e.preventDefault();

        // Validating input
        if (description === '') {
            setErrorMessage('please enter description first')
        } else {
            // Handling submission
            let newTask = {
                id: uuid(),
                description: description,
                done: done
            }
            setSaving(true);

            api.post('/tasks', newTask)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(addTask(newTask));
                        setDescription('');
                        setDone(false);
                        setErrorMessage(null);

                        setSaving(false);
                    }
                })



        }
    }
    return (
        <div className='addTask shadow p-3 mb-5 rounded'>
            <h2>Add a new task:</h2>
            <form onSubmit={handleSubmitForm}>
                {errorMessage &&
                    <div className="alert alert-warning">
                        Oops: {errorMessage}. Check our <Link className='alert-link' to='/help'><strong>help</strong></Link> page for more.
                    </div>
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" maxLength={150} onChange={handleDescriptionChange} value={description} />
                </div>
                <div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Status</span>
                        <select onChange={handleStatusChange} value={done} className="form-select" aria-label="Default select example">
                            <option value={true}>Completed</option>
                            <option value={false}>Open</option>
                        </select>
                    </div>
                </div>
                <label>
                    {saving && (
                        <button className="btn btn-primary saving" type='submit' disabled>Saving...</button>
                    )}
                    {!saving && (
                        <button className="btn btn-primary" type='submit'>Add Task</button>
                    )}
                </label>
            </form>
        </div>
    );
}