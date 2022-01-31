import './Task.scss'

function Task(props) {

    const handleStatusClick = () => {
        const id = props.task.id;
        props.handleStatusChange(id);
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>{props.task.description}</h3>
                <div className='card-subtitle text-muted mb-1'>{props.task.id}</div>
                <div className='card-subtitle text-muted mb-1'>Status: {props.task.done ? <span>Completed</span> : <span>Open</span>}</div>
                <button onClick={handleStatusClick}>Change Status</button>
                <button>Remove Task</button>
            </div>
        </div>
    );
}

export default Task;