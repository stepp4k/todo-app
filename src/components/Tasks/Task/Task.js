import './Task.scss'

function Task(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>{props.task.description}</h3>
                <div className='card-subtitle text-muted mb-1'>{props.task.id}</div>
                <div className='card-subtitle text-muted mb-1'>Status: {props.task.done ? <span>Completed</span> : <span>Open</span>}</div>
            </div>
        </div>
    );
}

export default Task;