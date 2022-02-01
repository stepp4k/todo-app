import './Task.scss'

function Task(props) {
    const id = props.task.id;

    const handleStatusClick = () => {
        //const id = props.task.id;
        props.handleStatusChange(id);
    }

    const handleRemoveClick = () => {
        //const id = props.task.id
        props.handleRemoveChange(id);

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